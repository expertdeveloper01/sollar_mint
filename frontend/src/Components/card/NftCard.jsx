import React from 'react'
import { Link } from 'react-router-dom'

export default function NftCard({ nfts }) {
    console.log(nfts)
    return (
        <div className="tab-2">
            <div className="row">

                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="nft__item">
                        <div className="author_list_pp">
                            <Link to="/author">
                                <div className="posrel">
                                    <img className="lazy" src="images/author/author-10.jpg" alt="" />
                                    <img src="images/check.svg" className="checkimg" />
                                </div>

                                <p>Diamond HODLR</p>
                            </Link>
                        </div>
                        <div className="nft__item_wrap">

                            <Link to="/item-details">
                                <img src="images/items/static-1.jpg" className="lazy nft__item_preview" alt="" />
                            </Link>
                            <div className="blurr_background" data-year="2022" data-month="2" data-day="16" data-hour="8">
                                <div className="flex-between always">
                                    <div className="bid_amount">
                                        <p>Start Bid</p>
                                        <h3>4.73  ETH</h3>
                                    </div>
                                    <div className="bid_amount">
                                        <p>AUCTION ENDING IN</p>
                                        <h3>8h : 15m : 25s</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="nft__item_info">
                            <Link to="/item-details">
                                <h4>Deep Sea Phantasy</h4>
                            </Link>

                            <div className="nft__item_price">
                                0.06 ETH<span>1/22</span>

                            </div>
                            <div className="nft__item_action">
                                <a href="#" className="btn-main btn-wallet">Place a bid</a>
                            </div>
                            <div className="nft__item_like">
                                <i className="fa fa-heart"></i><span>80</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
