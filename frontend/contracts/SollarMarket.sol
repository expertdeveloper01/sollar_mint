// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "./interfaces/SollarCollection.sol";
import "./interfaces/SollarMarket.sol";
import "./utils/SollarErrors.sol";
import "./utils/SollarEvents.sol";
import "./lib/PaymentLib.sol";

contract Sollar is
    SollarMarket,
    SollarErrors,
    SollarEvents,
    Ownable,
    IERC721Receiver
{
    uint256 private constant PRECISION = 1e3;
    uint256 private constant MAX_FEE = 175; // 1.75% is maximum trade fee

    Listing[] private _listings;
    Auction[] private _auctions;

    // supported ERC20 tokens
    address[] public supportedERC20tokens;
    mapping(address => bool) private _erc20Tokensmapping;

    // tokenId => offer
    mapping(uint256 => Offer[]) private _offers;

    // auctionId => user => bid amount
    mapping(uint256 => mapping(address => uint256)) private auctionBidderAmounts;

    uint256 public fee = 0; // 0%
    address private feeRecipient;

    constructor() {
        feeRecipient = msg.sender;
    }

    function getNftContract (address  _nftAddress) internal pure returns (SollarCollection) {
        if (_nftAddress == address(0)) revert SollarMarket_AddressZero();
        return SollarCollection(_nftAddress);
    }

    // ************************** //
    //      Direct Sale Logic     //
    // ************************** //

    function listItem(
        uint256 _tokenId,
        address _paymentToken,
        uint256 _buyPrice,
        address _nftAddress
    ) external returns (uint256 listingId) {
        // check that token is allowed
        _allowedToken(_paymentToken);

        SollarCollection nftContract = getNftContract(_nftAddress);
        _isSollarTokenOwner(_nftAddress, _tokenId, msg.sender);

        // check that the user approved this contract to transfer token
        if (nftContract.getApproved(_tokenId) != address(this))
            revert SollarMarket_ItemNotApproved(_tokenId);

        listingId = _listings.length;

        Listing memory listingItem;
        listingItem.tokenId = _tokenId;
        listingItem.seller = msg.sender;
        listingItem.paymentToken = _paymentToken;
        listingItem.buyPrice = _buyPrice;
        listingItem.nftAddress = _nftAddress;
        listingItem.status = ListingStatus.Active;

        _listings.push(listingItem);

        emit ItemListed(listingId, msg.sender, _tokenId, _nftAddress);
    }

    function buyItem(uint256 _listingId) external payable {
        Listing memory item = _listings[_listingId];

        if (item.status != ListingStatus.Active)
            revert SollarMarket_ListingNotActive(_listingId);

        if (item.paymentToken == address(0) && msg.value != item.buyPrice)
            revert SollarMarket_InsufficientAmount();

        SollarCollection nftContract = getNftContract(item.nftAddress);

        // handle payment
        _handlePayment(
            item.tokenId,
            item.seller,
            msg.sender,
            item.paymentToken,
            item.buyPrice,
            item.nftAddress
        );

        // transfer nft to buyer
        nftContract.safeTransferFrom(item.seller, msg.sender, item.tokenId);

        // update listing status
        _listings[_listingId].status = ListingStatus.Sold;

        emit ItemSold(_listingId, msg.sender);
    }

    function cancelListing(uint256 _listingId) external {
        if (msg.sender != _listings[_listingId].seller)
            revert SollarMarket_OnlySeller(_listingId);
        if (_listings[_listingId].status != ListingStatus.Active)
            revert SollarMarket_ListingNotActive(_listingId);

        _listings[_listingId].status = ListingStatus.Canceled;

        emit ItemCanceled(_listingId);
    }

    // ********************** //
    //      Offers Logic      //
    // ********************** //

    function makeOffer(
        uint256 _tokenId,
        address _paymentToken,
        uint256 _offerPrice,
        uint256 _expirationTime,
        address _nftAddress
    ) external payable returns (uint256 offerId) {
        // check that token is allowed
        _allowedToken(_paymentToken);
        SollarCollection nftContract = getNftContract(_nftAddress);

        if (nftContract.ownerOf(_tokenId) == address(0)) revert();

        if (_expirationTime <= block.timestamp)
            revert SollarMarket_InvalidExpirationTime();

        if (_paymentToken == address(0)) {
            // can not approve MATIC so offerer is obliged to escrow offerPrice to this contract
            // the fund can be withdrawn by canceling the offer
            if (msg.value != _offerPrice)
                revert SollarMarket_InsufficientAmount();
        } else {
            // check that the offerer has approved offerPrice amount of paymetToken to this contract
            if (
                IERC20(_paymentToken).allowance(msg.sender, address(this)) <
                _offerPrice
            ) revert SollarMarket_OfferAmountNotApproved();
        }

        offerId = _offers[_tokenId].length;

        Offer memory offer;
        offer.offerer = msg.sender;
        offer.paymentToken = _paymentToken;
        offer.price = _offerPrice;
        offer.expireTime = uint128(_expirationTime);
        offer.nftAddress = _nftAddress;
        offer.status = OfferStatus.Active;

        _offers[_tokenId].push(offer);

        emit NewOffer(offerId, _nftAddress, _tokenId, msg.sender);
    }

    function acceptOffer(uint256 _tokenId, uint256 _offerId) external {
        Offer memory offer = _offers[_tokenId][_offerId];

        _isSollarTokenOwner(offer.nftAddress, _tokenId, msg.sender);

        if (_offerStatus(_tokenId, _offerId) != OfferStatus.Active)
            revert SollarMarket_OfferNotActive(_offerId, _tokenId);

        SollarCollection nftContract = getNftContract(offer.nftAddress);
        // handle payment like a normal sale
        _handlePayment(
            _tokenId,
            msg.sender,
            offer.offerer,
            offer.paymentToken,
            offer.price,
            offer.nftAddress
        );

        _offers[_tokenId][_offerId].status = OfferStatus.Ended;

        // transfer nft to this contract
        nftContract.safeTransferFrom(msg.sender, offer.offerer, _tokenId);

        emit OfferAccepted(_offerId, _tokenId, msg.sender);
    }

    function cancelOffer(uint256 _tokenId, uint256 _offerId) external {
        Offer memory offer = _offers[_tokenId][_offerId];

        if (msg.sender != offer.offerer)
            revert SollarMarket_OnlyOfferer(_offerId, _tokenId);
        if (_offerStatus(_tokenId, _offerId) != OfferStatus.Active)
            revert SollarMarket_OfferNotActive(_offerId, _tokenId);

        _offers[_tokenId][_offerId].status = OfferStatus.Ended;

        if (offer.paymentToken == address(0)) {
            // return MATIC amount escowed when creating offer to offerer
            PaymentLib.transferNativeToken(offer.offerer, offer.price);
        }

        emit OfferCanceled(_offerId, _tokenId);
    }

    // ********************** //
    //      Auction Logic     //
    // ********************** //

    function startAuction(
        uint256 _tokenId,
        address _paymentToken,
        uint256 _directBuyPrice,
        uint256 _startPrice,
        uint128 _startTime,
        uint128 _endTime,
        address _nftAddress
    ) external returns (uint256 auctionId) {
        // check that token is allowed
        _allowedToken(_paymentToken);

        _isSollarTokenOwner(_nftAddress, _tokenId, msg.sender);

        if (_endTime <= _startTime)
            revert SollarMarket_InvalidAuctionPeriod(_endTime, _startTime);
        if (_startTime < block.timestamp)
            revert SollarMarket_InvalidStartTime(_startTime);
        if (_startPrice == 0) revert SollarMarket_InvalidStartPrice();
        if (_directBuyPrice <= _startPrice)
            revert SollarMarket_InvalidDirectBuyPrice(_directBuyPrice);

        SollarCollection nftContract = getNftContract(_nftAddress);

        auctionId = _auctions.length;

        Auction memory _auction;
        _auction.tokenId = _tokenId;
        _auction.seller = msg.sender;
        _auction.paymentToken = _paymentToken;
        _auction.directBuyPrice = _directBuyPrice;
        _auction.startPrice = _startPrice;
        _auction.startTime = uint128(_startTime);
        _auction.endTime = uint128(_endTime);
        _auction.nftAddress = _nftAddress;
        _auction.status = AuctionStatus.Open;

        _auctions.push(_auction);

        // transfer nft to this contract
        nftContract.safeTransferFrom(msg.sender, address(this), _tokenId);

        emit AuctionStarted(auctionId, msg.sender, _nftAddress, _tokenId, _startTime);
    }

    function bid(uint256 _auctionId, uint256 _amount) external payable {
        Auction memory _auction = _auctions[_auctionId];

        if (_auctionStatus(_auctionId) != AuctionStatus.Open)
            revert SollarMarket_AuctionNotOpen(_auctionId);
        if (msg.sender == _auction.highestBidder)
            revert SollarMarket_AlreadyHighestBid(_auctionId);

        if (_auction.paymentToken == address(0)) {
            _amount = msg.value;
        }

        uint256 oldBidAmount = auctionBidderAmounts[_auctionId][msg.sender];
        if (_auction.highestBidder != address(0)) {
            if (oldBidAmount + _amount <= _auction.highestBid)
                revert SollarMarket_InsufficientBid(_auctionId);
        } else {
            // case of the first bid
            if (_amount < _auction.startPrice)
                revert SollarMarket_InsufficientBid(_auctionId);
        }

        if (_auction.paymentToken != address(0)) {
            IERC20(_auction.paymentToken).transferFrom(
                msg.sender,
                address(this),
                _amount
            );
        }

        auctionBidderAmounts[_auctionId][msg.sender] += _amount;

        _auctions[_auctionId].highestBidder = msg.sender;
        _auctions[_auctionId].highestBid = oldBidAmount + _amount;

        emit NewBid(_auctionId, msg.sender, oldBidAmount + _amount);
    }

    function directBuyAuction(uint256 _auctionId) external payable {
        Auction memory _auction = _auctions[_auctionId];

        if (_auctionStatus(_auctionId) != AuctionStatus.Open)
            revert SollarMarket_AuctionNotOpen(_auctionId);

        if (
            _auction.paymentToken == address(0) &&
            msg.value != _auction.directBuyPrice
        ) revert SollarMarket_InsufficientAmount();

        SollarCollection nftContract = getNftContract(_auction.nftAddress);

        // handle payment
        _handlePayment(
            _auction.tokenId,
            _auction.seller,
            msg.sender,
            _auction.paymentToken,
            _auction.directBuyPrice,
            _auction.nftAddress
        );

        _auctions[_auctionId].status = AuctionStatus.DirectBuy;

        // transfer nft to the buyer
        nftContract.safeTransferFrom(
            address(this),
            msg.sender,
            _auction.tokenId
        );

        emit AuctionDirectBuy(_auctionId, msg.sender);
    }

    function withdrawBid(uint256 _auctionId) external {
        if (_auctionStatus(_auctionId) == AuctionStatus.Open) {
            // if auction is open don't allow highest bidder withdrawal
            if (msg.sender == _auctions[_auctionId].highestBidder)
                revert SollarMarket_IsHighestBidder(_auctionId);
        }
        uint256 bidAmount = auctionBidderAmounts[_auctionId][msg.sender];

        if (bidAmount == 0) revert SollarMarket_HasNoBid(_auctionId);

        auctionBidderAmounts[_auctionId][msg.sender] = 0;

        // return bid amount to the bidder
        PaymentLib.transferToken(
            _auctions[_auctionId].paymentToken,
            address(this),
            msg.sender,
            bidAmount
        );
    }

    function endAuction(uint256 _auctionId) external {
        Auction memory _auction = _auctions[_auctionId];

        if (
            _auctionStatus(_auctionId) != AuctionStatus.Ended ||
            _auction.status != AuctionStatus.Open
        )
            revert SollarMarket_AuctionPeriodNotEnded(
                _auctionId,
                _auction.endTime
            );

        SollarCollection nftContract = getNftContract(_auction.nftAddress);

        address buyer;
        if (_auction.highestBidder != address(0)) {
            buyer = _auction.highestBidder;

            // handle payment
            _handlePayment(
                _auction.tokenId,
                _auction.seller,
                address(this),
                _auction.paymentToken,
                _auction.highestBid,
                _auction.nftAddress
            );

            _auctions[_auctionId].status = AuctionStatus.Ended;

            // transfer nft to the highest bidder
            nftContract.safeTransferFrom(
                address(this),
                buyer,
                _auction.tokenId
            );
        } else {
            _auctions[_auctionId].status = AuctionStatus.Ended;

            // transfer nft back to the seller
            nftContract.safeTransferFrom(
                address(this),
                _auction.seller,
                _auction.tokenId
            );
        }

        emit AuctionEnded(_auctionId, buyer);
    }

    function cancelAuction(uint256 _auctionId) external {
        if (msg.sender != _auctions[_auctionId].seller)
            revert SollarMarket_OnlySeller(_auctionId);
        AuctionStatus state = _auctionStatus(_auctionId);
        if (state != AuctionStatus.Open && state != AuctionStatus.Closed)
            revert SollarMarket_CancelImpossible(_auctionId);

        SollarCollection nftContract = getNftContract(_auctions[_auctionId].nftAddress);

        _auctions[_auctionId].status = AuctionStatus.Canceled;

        // transfer nft back to seller
        nftContract.safeTransferFrom(
            address(this),
            msg.sender,
            _auctions[_auctionId].tokenId
        );

        emit AuctionCanceled(_auctionId);
    }

    // ************************ //
    //      Internal utils      //
    // ************************ //

    function _isSollarTokenOwner(address _nftAddress, uint256 _tokenId, address user) internal view {
        // check that the user is the owner of the token
        // also reverts if the token does not exists in the Sollar collection
        SollarCollection nftContract = getNftContract(_nftAddress);
        if (nftContract.ownerOf(_tokenId) != user)
            revert SollarMarket_OnlyTokenOwner(_tokenId);
    }

    function _allowedToken(address token) internal view {
        if (token != address(0)) {
            if (!_erc20Tokensmapping[token])
                revert SollarMarket_UnsupportedToken(token);
        }
    }

    function _handlePayment(
        uint256 tokenId,
        address seller,
        address buyer,
        address paymentToken,
        uint256 price,
        address _nftAddress
    ) internal {
        SollarCollection nftContract = getNftContract(_nftAddress);
        (address royaltyReceiver, uint256 royaltyAmount) = nftContract.royaltyInfo(tokenId, price);

        uint256 feeAmount = ((price * fee) / 100) / PRECISION;

        // pay platform fee
        PaymentLib.transferToken(paymentToken, buyer, feeRecipient, feeAmount);

        uint256 finalAmount;
        unchecked {
            finalAmount = price - feeAmount;
        }

        if (seller != royaltyReceiver && royaltyAmount != 0) {
            // pay NFT creator royalty in Matic
            PaymentLib.transferToken(
                paymentToken,
                buyer,
                royaltyReceiver,
                royaltyAmount
            );

            unchecked {
                finalAmount -= royaltyAmount;
            }

            emit RoyaltyPaid(_nftAddress, tokenId, royaltyReceiver, royaltyAmount);
        }

        // pay seller remaining amount
        PaymentLib.transferToken(paymentToken, buyer, seller, finalAmount);
    }

    function _offerStatus(uint256 tokenId, uint256 offerId)
        internal
        view
        returns (OfferStatus)
    {
        Offer memory offer = _offers[tokenId][offerId];
        if (block.timestamp > offer.expireTime) {
            return OfferStatus.Ended;
        } else {
            return offer.status;
        }
    }

    function _auctionStatus(uint256 auctionId)
        internal
        view
        returns (AuctionStatus)
    {
        Auction memory auction = _auctions[auctionId];
        if (
            auction.status == AuctionStatus.Canceled ||
            auction.status == AuctionStatus.DirectBuy
        ) {
            return auction.status;
        } else if (auction.startTime > block.timestamp) {
            return AuctionStatus.Closed;
        } else if (block.timestamp <= auction.endTime) {
            return AuctionStatus.Open;
        } else {
            return AuctionStatus.Ended;
        }
    }

    // ***************** //
    //      Getters      //
    // ***************** //

    function getListings() external view returns (Listing[] memory) {
        return _listings;
    }

    function getAuctions() external view returns (Auction[] memory) {
        return _auctions;
    }

    function getTokenBuyOffers(uint256 tokenId)
        external
        view
        returns (Offer[] memory)
    {
        return _offers[tokenId];
    }

    function getUserBidAmount(uint256 auctionId, address account)
        external
        view
        returns (uint256)
    {
        return auctionBidderAmounts[auctionId][account];
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }

    // ********************** //
    //     Owner functions    //
    // ********************** //

    function setFee(uint256 _fee) external onlyOwner {
        if (_fee > MAX_FEE) revert SollarMarket_InvalidFee(_fee);
        fee = _fee;

        emit NewFee(_fee);
    }

    function setFeeRecipient(address _newRecipient) external onlyOwner {
        feeRecipient = _newRecipient;
    }

    function addSupportedToken(address _token) external onlyOwner {
        if (_erc20Tokensmapping[_token])
            revert SollarMarket_AlreadySupported(_token);
        _erc20Tokensmapping[_token] = true;
        supportedERC20tokens.push(_token);

        emit NewSupportedToken(_token);
    }
}
