import { Pagination } from '@mui/material';
import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom'
import axios from '../../utils/axios';
import { Layout } from '../Layouts'

const ExplorePage = () => {
    const { isLoading, isError, data: categories = [], error } = useQuery('categories', {
        queryFn: () => axios.get('/api/categories').then(res => res.data.data)
    });

    return (
        <Layout title='Explore'>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                <section aria-label="section">
                    <div className="container-custom">
                        <div className=" wow fadeIn">
                            <div className="row">
                                <div className="fiterbutton">
                                    <button onclick="myFunction()"><i className="fa fa-filter" aria-hidden="true"></i> Filter</button>
                                </div>
                                <div className="filter_section" id="myDIV" >

                                    <div className="items_filter">
                                        <h3>Filters</h3>

                                        <div className="mb10">
                                            <input type="search" className="form-control" placeholder="search here" />
                                        </div>
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item mb10">
                                                <h2 className="accordion-header" id="flush-headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        Categories
                                                    </button>
                                                </h2>

                                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        {categories.map((ele, key) => {
                                                            return (
                                                                <div className="form-group1">
                                                                    <input type="checkbox" id={ele.name} />
                                                                    <label for={ele.name}>{ele.name}</label>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                        Event Type
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">

                                                    <div className="accordion-body">
                                                        <div className="form-group1">
                                                            <input type="checkbox" id="Now" />
                                                            <label for="Now">Buy Now</label>
                                                        </div>
                                                        <div className="form-group1">
                                                            <input type="checkbox" id="Auction" />
                                                            <label for="Auction">On Auction</label>
                                                        </div>
                                                        <div className="form-group1">
                                                            <input type="checkbox" id="Offers" />
                                                            <label for="Offers">Has Offers</label>
                                                        </div>
                                                        <div className="form-group1">
                                                            <input type="checkbox" id="New" />
                                                            <label for="New">New</label>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="price_section">
                                            <span>Price</span>
                                            <input type="text" className="form-control" placeholder="min price" />
                                            <input type="text" className="form-control" placeholder="max price" />
                                        </div>

                                        <a href="#" className="btn btn-main pricebtn">Apply</a>
                                    </div>
                                </div>
                                <div className="gallery_section">
                                    <div className="row">
                                        <div className="d-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
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

                                        <div className="d-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
                                        <div className="d-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
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

                                        <div className="d-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
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

                                        <div className="d-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
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

                                        <div className="d-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
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

                                        <div className="d-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
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

                                        <div className="d-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
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

                            </div>



                            <div className="spacer-single"></div>

                            <div className="pagination">
                                <Pagination count={5} variant="outlined" shape="rounded" color='success' />
                            </div>


                        </div>
                    </div>
                </section>

            </div>

        </Layout>
    )
}

export default ExplorePage