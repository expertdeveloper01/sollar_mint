// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

contract SollarEvents {
    event ItemListed(uint256 listingId, address seller, uint256 tokenId, address nftAddress);
    event ItemSold(uint256 listingId, address buyer);
    event ItemCanceled(uint256 listingId);
    event NewOffer(uint256 offerId, address nftAddress, uint256 tokenId, address offerer);
    event OfferAccepted(uint256 offerId, uint256 tokenId, address owner);
    event OfferCanceled(uint256 offerId, uint256 tokenId);
    event AuctionStarted(
        uint256 auctionId,
        address seller,
        address nftAddress,
        uint256 tokenId,
        uint256 startTime
    );
    event NewBid(uint256 auctionId, address bidder, uint256 bidAmount);
    event AuctionDirectBuy(uint256 auctionId, address buyer);
    event AuctionCanceled(uint256 auctionId);
    event AuctionEnded(uint256 auctionId, address buyer);
    event RoyaltyPaid(address nftAddress, uint256 tokenId, address receiver, uint256 amount);
    event NewSupportedToken(address token);
    event NewFee(uint256 fee);
}
