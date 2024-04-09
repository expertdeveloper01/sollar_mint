import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../Layouts";

const HomePage = () => {
  return (
    <Layout>
      <div>
        {/* <div className="navform down_search">
          <input
            id="quick_search"
            name="quick_search"
            placeholder="search item here..."
            type="text"
          />
          <a href="#" id="btn-submit">
            <i className="fa fa-search bg-color-transparent"></i>
          </a>
        </div> */}
        <section
          id="section-hero"
          aria-label="section"
          className="no-top no-bottom banner_section"
          style={{
            background: "url(images/background/11.jpg) right bottom"
          }}
        >
          <div className="v-center">
            <div className="container">
              <div className="row align-items-center mt-130">
                <div className="col-lg-6 text-white left_banner">
                  <div className="spacer-single"></div>
                  <h6 className="wow fadeInUp" data-wow-delay=".5s">
                    Buy, Sell & Create NFT World
                  </h6>
                  <div className="spacer-10"></div>
                  <h1 className="wow fadeInUp" data-wow-delay=".75s">
                    Create and sell your own unique NFTs.
                  </h1>
                  <p className="wow fadeInUp lead" data-wow-delay="1s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam etiam rhoncus aenean a iaculis aliquet rhoncus sed.
                    Accumsan sit consequat, sodales consectetur. Egestas
                    scelerisque ut dui sed nulla morbi quam eget luctus. In a
                    vel morbi sed nisi.
                  </p>
                  <div className="spacer-10"></div>
                  <Link
                    to="/explore"
                    className="btn-main wow fadeInUp lead"
                    data-wow-delay="1.25s"
                  >
                    Explore
                  </Link>
                  &nbsp;
                  <Link
                    to="/items-create"
                    className="btn-main btn-white wow fadeInUp lead"
                    data-wow-delay="1.25s"
                  >
                    Create
                  </Link>
                  <div className="mb-sm-30"></div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-item mt-30">
                        <div className="nft__item border_0">
                          <p className="hottest">Hottest Auction</p>
                          <div className="nft__item_wrap">
                            <Link to="/item-details">
                              <img
                                src="images/items/static-1.jpg"
                                className="lazy nft__item_preview"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="nft__item_info space_between">
                            <Link to="/item-details">
                              <h4>Pinky Ocean</h4>
                            </Link>

                            <div className="nft__item_action">
                              <a href="#" className="btn-main btn-wallet">
                                Place a bid
                              </a>
                            </div>
                          </div>
                          <div className="created_by">
                            <img src="images/check.svg" className="checkimg" />
                            <p>@Legends</p>
                          </div>

                          <div className="flex-between always card_data">
                            <div className="bid_amount">
                              <p>Start Bid</p>
                              <h3 className="green">4.73 ETH</h3>
                            </div>
                            <div className="bid_amount">
                              <p>AUCTION ENDING IN</p>
                              <h3>8h : 15m : 25s</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-item">
                        <div className="nft__item border_0">
                          <p className="hottest">Hottest Auction</p>

                          <div className="nft__item_wrap">
                            <Link to="/item-details">
                              <img
                                src="images/items/static-1.jpg"
                                className="lazy nft__item_preview"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="nft__item_info space_between">
                            <Link to="/item-details">
                              <h4>Pinky Ocean</h4>
                            </Link>

                            <div className="nft__item_action">
                              <a href="#" className="btn-main btn-wallet">
                                Place a bid
                              </a>
                            </div>
                          </div>
                          <div className="created_by">
                            <img src="images/check.svg" className="checkimg" />
                            <p>@Legends</p>
                          </div>

                          <div className="flex-between always card_data">
                            <div className="bid_amount">
                              <p>Start Bid</p>
                              <h3 className="green">4.73 ETH</h3>
                            </div>
                            <div className="bid_amount">
                              <p>AUCTION ENDING IN</p>
                              <h3>8h : 15m : 25s</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg_bannerBottom"></div>
        </section>
        <section id="section-items" className="pt60 pb60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="style-2">Live Auctions</h2>
              </div>
              <div id="items-carousel-5-cols" className="owl-carousel wow fadeIn">
                <div className="d-item">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="Author">
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
                      <div className="countdown">
                        <h3>8h : 15m : 25s</h3>
                      </div>
                    </div>
                    <div className="nft__item_info">
                      <Link to="/item-details">
                        <h4>Deep Sea Phantasy</h4>
                      </Link>

                      <div className="nft__item_price">
                        0.06 ETH<span>1/22</span>
                        <div className="nft_bid">
                          {" "}
                          0.06 ETH<span>1/22</span>
                        </div>
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
                <div className="d-item">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="Author">
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
                      <div className="countdown">
                        <h3>8h : 15m : 25s</h3>
                      </div>
                    </div>
                    <div className="nft__item_info">
                      <Link to="/item-details">
                        <h4>Deep Sea Phantasy</h4>
                      </Link>

                      <div className="nft__item_price">
                        0.06 ETH<span>1/22</span>
                        <div className="nft_bid">
                          {" "}
                          0.06 ETH<span>1/22</span>
                        </div>
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
                <div className="d-item">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="Author">
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
                      <div className="countdown">
                        <h3>8h : 15m : 25s</h3>
                      </div>
                    </div>
                    <div className="nft__item_info">
                      <Link to="/item-details">
                        <h4>Deep Sea Phantasy</h4>
                      </Link>

                      <div className="nft__item_price">
                        0.06 ETH<span>1/22</span>
                        <div className="nft_bid">
                          {" "}
                          0.06 ETH<span>1/22</span>
                        </div>
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
                <div className="d-item">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="Author">
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
                      <div className="countdown">
                        <h3>8h : 15m : 25s</h3>
                      </div>
                    </div>
                    <div className="nft__item_info">
                      <Link to="/item-details">
                        <h4>Deep Sea Phantasy</h4>
                      </Link>

                      <div className="nft__item_price">
                        0.06 ETH<span>1/22</span>
                        <div className="nft_bid">
                          {" "}
                          0.06 ETH<span>1/22</span>
                        </div>
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
                <div className="d-item">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="Author">
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
                      <div className="countdown">
                        <h3>8h : 15m : 25s</h3>
                      </div>
                    </div>
                    <div className="nft__item_info">
                      <Link to="/item-details">
                        <h4>Deep Sea Phantasy</h4>
                      </Link>

                      <div className="nft__item_price">
                        0.06 ETH<span>1/22</span>
                        <div className="nft_bid">
                          {" "}
                          0.06 ETH<span>1/22</span>
                        </div>
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
                <div className="d-item">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="Author">
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
                      <div className="countdown">
                        <h3>8h : 15m : 25s</h3>
                      </div>
                    </div>
                    <div className="nft__item_info">
                      <Link to="/item-details">
                        <h4>Deep Sea Phantasy</h4>
                      </Link>

                      <div className="nft__item_price">
                        0.06 ETH<span>1/22</span>
                        <div className="nft_bid">
                          {" "}
                          0.06 ETH<span>1/22</span>
                        </div>
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
              </div>
            </div>
          </div>
        </section>
        <div className="shadexbox">
          <span className="shades4"></span>
          <span className="shades3"></span>
        </div>
        <section id="section-popular" className="pt60 pb60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="style-2">Top Sellers</h2>
              </div>
              <div className="col-md-12 wow fadeIn">
                <div className="author_list row">
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="creator_list">
                      <div className="author_list_pp">
                        <Link to="Author">
                          <img
                            className="lazy"
                            src="images/author/author-1.jpg"
                            alt=""
                          />
                          <img src="images/check.svg" className="checkimg" />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="Author">Monica Lucas</Link>
                        <span>3.2 ETH</span>
                        <div className="creator_data">
                          <p> Created: 25</p>
                          <p> Sold: 25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="shadexbox">
          <span className="shades4"></span>
          <span className="shades3"></span>
        </div>
        <section id="section-collections" className="pt60 pb60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="style-2">Hot Collections</h2>
              </div>
              <div
                id="collection-carousel-5-cols"
                className="owl-carousel wow fadeIn"
              >
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/collection-details">
                      <img
                        src="images/collections/collection.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to="/collection-details">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-1.jpg"
                        alt=""
                      />
                    </Link>
                    <img src="images/check.svg" className="checkimg" />
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/collection-details">
                      <h4>Abstraction</h4>
                    </Link>
                    <span>ERC-192</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/collection-details">
                      <img
                        src="images/collections/collection.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to="/collection-details">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-2.jpg"
                        alt=""
                      />
                    </Link>
                    <img src="images/check.svg" className="checkimg" />
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/collection-details">
                      <h4>Patternlicious</h4>
                    </Link>
                    <span>ERC-61</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/collection-details">
                      <img
                        src="images/collections/collection.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to="/collection-details">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-3.jpg"
                        alt=""
                      />
                    </Link>
                    <img src="images/check.svg" className="checkimg" />
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/collection-details">
                      <h4>Skecthify</h4>
                    </Link>
                    <span>ERC-126</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/collection-details">
                      <img
                        src="images/collections/collection.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to="/collection-details">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-4.jpg"
                        alt=""
                      />
                    </Link>
                    <img src="images/check.svg" className="checkimg" />
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/collection-details">
                      <h4>Cartoonism</h4>
                    </Link>
                    <span>ERC-73</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/collection-details">
                      <img
                        src="images/collections/collection.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to="/collection-details">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-5.jpg"
                        alt=""
                      />
                    </Link>
                    <img src="images/check.svg" className="checkimg" />
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/collection-details">
                      <h4>Virtuland</h4>
                    </Link>
                    <span>ERC-85</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/collection-details">
                      <img
                        src="images/collections/collection.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to="/collection-details">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-6.jpg"
                        alt=""
                      />
                    </Link>
                    <img src="images/check.svg" className="checkimg" />
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/collection-details">
                      <h4>Papercut</h4>
                    </Link>
                    <span>ERC-42</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div className="container">
            <div className="row wow fadeIn  ">
              <div className="col-lg-12">
                <div className="col-md-12"></div>
                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    <h2 className="style-2">Explore</h2>
                    <ul className="de_nav customFilter">
                      <li>
                        <span>Art</span>
                      </li>
                      <li>
                        <span>Virtual World</span>
                      </li>
                      <li>
                        <span>Music</span>
                      </li>
                      <li className="active">
                        <span>All</span>
                      </li>
                    </ul>

                    <div className="de_tab_content">
                      <div className="tab-1">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                              <div className="author_list_pp">
                                <Link to="Author">
                                  <div className="posrel">
                                    <img
                                      className="lazy"
                                      src="images/author/author-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="images/check.svg"
                                      className="checkimg"
                                    />
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

                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                              <div className="author_list_pp">
                                <Link to="Author">
                                  <div className="posrel">
                                    <img
                                      className="lazy"
                                      src="images/author/author-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="images/check.svg"
                                      className="checkimg"
                                    />
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

                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                              <div className="author_list_pp">
                                <Link to="Author">
                                  <div className="posrel">
                                    <img
                                      className="lazy"
                                      src="images/author/author-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="images/check.svg"
                                      className="checkimg"
                                    />
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

                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                              <div className="author_list_pp">
                                <Link to="Author">
                                  <div className="posrel">
                                    <img
                                      className="lazy"
                                      src="images/author/author-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="images/check.svg"
                                      className="checkimg"
                                    />
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
                        </div>
                      </div>

                      <div className="tab-2">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                              <div className="author_list_pp">
                                <Link to="Author">
                                  <div className="posrel">
                                    <img
                                      className="lazy"
                                      src="images/author/author-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="images/check.svg"
                                      className="checkimg"
                                    />
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
                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                              <div className="author_list_pp">
                                <Link to="Author">
                                  <div className="posrel">
                                    <img
                                      className="lazy"
                                      src="images/author/author-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="images/check.svg"
                                      className="checkimg"
                                    />
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
                        </div>
                      </div>

                      <div className="tab-3">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                              <div className="author_list_pp">
                                <Link to="Author">
                                  <div className="posrel">
                                    <img
                                      className="lazy"
                                      src="images/author/author-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="images/check.svg"
                                      className="checkimg"
                                    />
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
                        </div>
                      </div>
                      <div className="tab-4">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                              <div className="author_list_pp">
                                <Link to="Author">
                                  <div className="posrel">
                                    <img
                                      className="lazy"
                                      src="images/author/author-10.jpg"
                                      alt=""
                                    />
                                    <img
                                      src="images/check.svg"
                                      className="checkimg"
                                    />
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <Link to="Explore" className="btn-main wow fadeInUp lead">
                  Load more
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="shadexbox">
          <span className="shades4"></span>
          <span className="shades3"></span>
        </div>
        <section id="section-intro" className="no-top no-bottom">
          <div className="container">
            <div className="row">
              {" "}
              <div className="col-lg-12 text-center">
                <h2 className="style-2">Create And Sell Your NFTs</h2>
              </div>
            </div>
            <div className="row mt60 mb60">
              <div className="col-md-6">
                <img src="images/homeSteps.png" alt="" />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-sm-30">
                    <div className="feature-box f-boxed style-3">
                      <div className="text">
                        <img src="images/icon1.png" alt="" />
                        <h4 className="wow fadeInUp">Set up your wallet</h4>
                        <p className="wow fadeInUp" data-wow-delay=".25s">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-sm-30">
                    <div className="feature-box f-boxed style-3">
                      <div className="text">
                        <img src="images/icon2.png" alt="" />
                        <h4 className="wow fadeInUp">Create Your Collection</h4>
                        <p className="wow fadeInUp" data-wow-delay=".25s">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-sm-30">
                    <div className="feature-box f-boxed style-3">
                      <div className="text">
                        <img src="images/icon3.png" alt="" />
                        <h4 className="wow fadeInUp">Add Your NFTs</h4>
                        <p className="wow fadeInUp" data-wow-delay=".25s">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-sm-30">
                    <div className="feature-box f-boxed style-3">
                      <div className="text">
                        <img src="images/icon4.png" alt="" />
                        <h4 className="wow fadeInUp">List Them For Sale</h4>
                        <p className="wow fadeInUp" data-wow-delay=".25s">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
