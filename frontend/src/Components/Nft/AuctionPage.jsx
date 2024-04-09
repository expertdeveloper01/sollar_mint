import { Pagination } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { Layout } from "../Layouts";

const AuctionPage = () => {

  const { isLoading, isError, data: categories = [], error } = useQuery('categories', {
    queryFn: () => axios.get('/api/categories').then(res => res.data.data)
  });

  return (
    <Layout title="Auction page">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section aria-label="section">
          <div className="container">
            <div className="row wow fadeIn">
              <div className="col-lg-12">
                <div className="items_filter flex-between">
                  <div className="">
                    <div id="item_category" className="dropdown">
                      <a href="#" >
                        All categories
                      </a>
                      <ul className="dropdown-menu">
                        {
                          categories.map((ele, key) => {
                            return (
                              <li key={key}>
                                <span>{ele.name}</span>
                              </li>

                            )
                          })
                        }
                      </ul>
                    </div>
                    <div id="buy_category" className="dropdown">
                      <a href="#" className="btn-selector">
                        Buy Now
                      </a>
                      <ul className="dropdown-menu">
                        <li className="active">
                          <span>Buy Now</span>
                        </li>
                        <li>
                          <span>On Auction</span>
                        </li>
                        <li>
                          <span>Has Offers</span>
                        </li>
                      </ul>
                    </div>

                    <div id="items_type" className="dropdown">
                      <a href="#" className="btn-selector">
                        Default Price
                      </a>
                      <ul className="dropdown-menu">
                        <li className="active">
                          <span>Default Price</span>
                        </li>
                        <li>
                          <span>Price Low - Hight</span>
                        </li>
                        <li>
                          <span>Price Hight - Low</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <form
                    action="#"
                    className="row form-dark flex-end"
                    id="form_quick_search"
                    method="post"
                    name="form_quick_search"
                  >
                    <div className="col text-center">
                      <input
                        className="form-control"
                        id="name_1"
                        name="name_1"
                        placeholder="search item here..."
                        type="text"
                      />{" "}
                      <a href="#" id="btn-submit">
                        <i className="fa fa-search bg-color-transparent"></i>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="/author">
                      <div className="posrel">
                        <img
                          className="lazy"
                          src="images/author/author-10.jpg"
                          alt=""
                        />
                        <img src="images/check.svg" className="checkimg" />
                      </div>

                      <p>Diamond HODLR</p>
                    </Link>
                  </div>
                  <div className="nft__item_wrap">
                    <Link to="/item-details">
                      <img
                        src="images/items/static-1.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                    <div
                      className="blurr_background"
                      data-year="2022"
                      data-month="2"
                      data-day="16"
                      data-hour="8"
                    >
                      <div className="flex-between always">
                        <div className="bid_amount">
                          <p>Start Bid</p>
                          <h3>41.73 ETH</h3>
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
                      <a href="#" className="btn-main btn-wallet">
                        Place a bid
                      </a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="/author">
                      <div className="posrel">
                        <img
                          className="lazy"
                          src="images/author/author-10.jpg"
                          alt=""
                        />
                        <img src="images/check.svg" className="checkimg" />
                      </div>

                      <p>Diamond HODLR</p>
                    </Link>
                  </div>
                  <div className="nft__item_wrap">
                    <Link to="/item-details">
                      <img
                        src="images/items/static-1.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                    <div
                      className="blurr_background"
                      data-year="2022"
                      data-month="2"
                      data-day="16"
                      data-hour="8"
                    >
                      <div className="flex-between always">
                        <div className="bid_amount">
                          <p>Start Bid</p>
                          <h3>4.73 ETH</h3>
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
                      <a href="#" className="btn-main btn-wallet">
                        Place a bid
                      </a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="/author">
                      <div className="posrel">
                        <img
                          className="lazy"
                          src="images/author/author-10.jpg"
                          alt=""
                        />
                        <img src="images/check.svg" className="checkimg" />
                      </div>

                      <p>Diamond HODLR</p>
                    </Link>
                  </div>
                  <div className="nft__item_wrap">
                    <Link to="/item-details">
                      <img
                        src="images/items/static-1.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                    <div
                      className="blurr_background"
                      data-year="2022"
                      data-month="2"
                      data-day="16"
                      data-hour="8"
                    >
                      <div className="flex-between always">
                        <div className="bid_amount">
                          <p>Start Bid</p>
                          <h3>4.73 ETH</h3>
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
                      <a href="#" className="btn-main btn-wallet">
                        Place a bid
                      </a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="/author">
                      <div className="posrel">
                        <img
                          className="lazy"
                          src="images/author/author-10.jpg"
                          alt=""
                        />
                        <img src="images/check.svg" className="checkimg" />
                      </div>

                      <p>Diamond HODLR</p>
                    </Link>
                  </div>
                  <div className="nft__item_wrap">
                    <Link to="/item-details">
                      <img
                        src="images/items/static-1.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                    <div
                      className="blurr_background"
                      data-year="2022"
                      data-month="2"
                      data-day="16"
                      data-hour="8"
                    >
                      <div className="flex-between always">
                        <div className="bid_amount">
                          <p>Start Bid</p>
                          <h3>4.73 ETH</h3>
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
                      <a href="#" className="btn-main btn-wallet">
                        Place a bid
                      </a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="/author">
                      <div className="posrel">
                        <img
                          className="lazy"
                          src="images/author/author-10.jpg"
                          alt=""
                        />
                        <img src="images/check.svg" className="checkimg" />
                      </div>

                      <p>Diamond HODLR</p>
                    </Link>
                  </div>
                  <div className="nft__item_wrap">
                    <Link to="/item-details">
                      <img
                        src="images/items/static-1.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                    <div
                      className="blurr_background"
                      data-year="2022"
                      data-month="2"
                      data-day="16"
                      data-hour="8"
                    >
                      <div className="flex-between always">
                        <div className="bid_amount">
                          <p>Start Bid</p>
                          <h3>4.73 ETH</h3>
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
                      <a href="#" className="btn-main btn-wallet">
                        Place a bid
                      </a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="/author">
                      <div className="posrel">
                        <img
                          className="lazy"
                          src="images/author/author-10.jpg"
                          alt=""
                        />
                        <img src="images/check.svg" className="checkimg" />
                      </div>

                      <p>Diamond HODLR</p>
                    </Link>
                  </div>
                  <div className="nft__item_wrap">
                    <Link to="/item-details">
                      <img
                        src="images/items/static-1.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                    <div
                      className="blurr_background"
                      data-year="2022"
                      data-month="2"
                      data-day="16"
                      data-hour="8"
                    >
                      <div className="flex-between always">
                        <div className="bid_amount">
                          <p>Start Bid</p>
                          <h3>4.73 ETH</h3>
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
                      <a href="#" className="btn-main btn-wallet">
                        Place a bid
                      </a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="/author">
                      <div className="posrel">
                        <img
                          className="lazy"
                          src="images/author/author-10.jpg"
                          alt=""
                        />
                        <img src="images/check.svg" className="checkimg" />
                      </div>

                      <p>Diamond HODLR</p>
                    </Link>
                  </div>
                  <div className="nft__item_wrap">
                    <Link to="/item-details">
                      <img
                        src="images/items/static-1.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                    <div
                      className="blurr_background"
                      data-year="2022"
                      data-month="2"
                      data-day="16"
                      data-hour="8"
                    >
                      <div className="flex-between always">
                        <div className="bid_amount">
                          <p>Start Bid</p>
                          <h3>4.73 ETH</h3>
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
                      <a href="#" className="btn-main btn-wallet">
                        Place a bid
                      </a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="/author">
                      <div className="posrel">
                        <img
                          className="lazy"
                          src="images/author/author-10.jpg"
                          alt=""
                        />
                        <img src="images/check.svg" className="checkimg" />
                      </div>

                      <p>Diamond HODLR</p>
                    </Link>
                  </div>
                  <div className="nft__item_wrap">
                    <Link to="/item-details">
                      <img
                        src="images/items/static-1.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                    <div
                      className="blurr_background"
                      data-year="2022"
                      data-month="2"
                      data-day="16"
                      data-hour="8"
                    >
                      <div className="flex-between always">
                        <div className="bid_amount">
                          <p>Start Bid</p>
                          <h3>4.73 ETH</h3>
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
                      <a href="#" className="btn-main btn-wallet">
                        Place a bid
                      </a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
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
  );
};

export default AuctionPage;
