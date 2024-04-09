// SPDX-License-Identifier:MIT

pragma solidity ^0.8.10;

contract SollarErrors {
    error SollarMarket_OnlyTokenOwner(uint256 tokenId);
    error SollarMarket_ItemNotApproved(uint256 tokenId);
    error SollarMarket_AddressZero();
    error SollarMarket_OnlySeller(uint256 id);
    error SollarMarket_ListingNotActive(uint256 listingId);
    error SollarMarket_OfferAmountNotApproved();
    error SollarMarket_InvalidExpirationTime();
    error SollarMarket_OfferNotActive(uint256 offerId, uint256 tokenId);
    error SollarMarket_OnlyOfferer(uint256 offerId, uint256 tokenId);
    error SollarMarket_InvalidAuctionPeriod(uint256 endTime, uint256 startTime);
    error SollarMarket_InvalidStartTime(uint256 startTime);
    error SollarMarket_InvalidStartPrice();
    error SollarMarket_InvalidDirectBuyPrice(uint256 directBuyPrice);
    error SollarMarket_AuctionNotOpen(uint256 auctionId);
    error SollarMarket_AlreadyHighestBid(uint256 auctionId);
    error SollarMarket_InsufficientBid(uint256 auctionId);
    error SollarMarket_InsufficientAmount();
    error SollarMarket_IsHighestBidder(uint256 auctionId);
    error SollarMarket_HasNoBid(uint256 auctionId);
    error SollarMarket_AuctionPeriodNotEnded(uint256 auctionId, uint256 endTime);
    error SollarMarket_CancelImpossible(uint256 auctionId);
    error SollarMarket_UnsupportedToken(address token);
    error SollarMarket_AlreadySupported(address token);
    error SollarMarket_InvalidFee(uint256 fee);
    error SollarMarket_TransferFailed();
}
