import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import { Button, Tab } from '@mui/material'
import React, { useState } from 'react'
import { Layout } from '../Layouts'
import Buy from '../Miscellaneous/Buy'
import PlaceBid from '../Miscellaneous/PlaceBid'

const ItemDetailsPage = () => {

    const [openBuyModal, setOpenBuyModal] = useState(false)
    const [openBidModal, setOpenBidModal] = useState(false)
    const [value, setValue] = useState('owners');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Layout title='Item details page'>

            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                <section aria-label="section" className="mt30 sm-mt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <img src="images/items/big-5.jpg" className="img-fluid img-rounded mb30" alt="" />

                                <audio className="audio-control" controls controlsList="nodownload">
                                    <source src="https://custom.com/Cig Swaag - Jingle Punks.mp3" type="audio/mp3" />
                                </audio>

                            </div>
                            <div className="col-md-6">
                                <div className="item_info">
                                    <div className="flex-between always">
                                        <div> AUCTION ENDING IN <div className="de_countdown" data-year="2022" data-month="2" data-day="16" data-hour="8"> </div></div>
                                        <div className="item_info_counts">
                                            <div className="item_info_type"><i className="fa fa-image"></i>Art</div>
                                            <div className="item_info_views"><i className="fa fa-eye"></i>250</div>
                                            <div className="item_info_like"><i className="fa fa-heart"></i>18</div>


                                        </div>
                                    </div>
                                    <h2>Test NFT</h2>

                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                    <div className="d-flex flex-row">
                                        <div className="mr40">
                                            <h6>Creator</h6>
                                            <div className="item_author">
                                                <div className="author_list_pp">
                                                    <a href="author.html">
                                                        <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                        <img src="images/check.svg" className="checkimg" />
                                                    </a>
                                                </div>
                                                <div className="author_list_info">
                                                    <a href="author.html">Monica Lucas</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6>Collection</h6>
                                            <div className="item_author">
                                                <div className="author_list_pp">
                                                    <a href="collection-details.html">
                                                        <img className="lazy" src="images/collections/coll-thumbnail-2.jpg" alt="" />
                                                        <img src="images/check.svg" className="checkimg" />
                                                    </a>
                                                </div>
                                                <div className="author_list_info">
                                                    <a href="collection-details.html">TheFunkyMusic</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="spacer-40"></div>

                                    <div className="de_tab tab_simple">
                                        <TabContext value={value}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab label="Owners" value="owners" />
                                                <Tab label="Bids" value="bids" />
                                                <Tab label="History" value="history" />

                                            </TabList>
                                        </TabContext>

                                        <div className="de_tab_content">
                                            <div className="tab-1">
                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-5.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        <h5>Jimmy Wright</h5>
                                                        1/1 on sale for <b>0.01 ETH</b> each
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        <h5>Monica Lucas</h5>
                                                        20/20 on sale for <b>0.01 ETH</b> each
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        <h5>Mamie Barnett</h5>
                                                        1 edition <b>not for sale</b>
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        <h5>Nicholas Daniels</h5>
                                                        1 edition <b>not for sale</b>
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        <h5>Lori Hart</h5>
                                                        1 edition <b>not for sale</b>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-2">
                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid accepted <b>0.005 ETH</b>
                                                        <span>by <b>Monica Lucas</b> at 6/15/2022, 3:20 AM</span>
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid <b>0.005 ETH</b>
                                                        <span>by <b>Mamie Barnett</b> at 6/14/2022, 5:40 AM</span>
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid <b>0.004 ETH</b>
                                                        <span>by <b>Nicholas Daniels</b> at 6/13/2022, 5:03 AM</span>
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid <b>0.003 ETH</b>
                                                        <span>by <b>Lori Hart</b> at 6/12/2022, 12:57 AM</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-3">
                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-5.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid <b>0.005 ETH</b>
                                                        <span>by <b>Jimmy Wright</b> at 6/14/2022, 6:40 AM</span>
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid accepted <b>0.005 ETH</b>
                                                        <span>by <b>Monica Lucas</b> at 6/15/2022, 3:20 AM</span>
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid <b>0.005 ETH</b>
                                                        <span>by <b>Mamie Barnett</b> at 6/14/2022, 5:40 AM</span>
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid <b>0.004 ETH</b>
                                                        <span>by <b>Nicholas Daniels</b> at 6/13/2022, 5:03 AM</span>
                                                    </div>
                                                </div>

                                                <div className="p_list">
                                                    <div className="p_list_pp">
                                                        <a href="author.html">
                                                            <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                            <img src="images/check.svg" className="checkimg" />
                                                        </a>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid <b>0.003 ETH</b>
                                                        <span>by <b>Lori Hart</b> at 6/12/2022, 12:57 AM</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="spacer-10"></div>

                                        <h6>Price</h6>
                                        <div className="nft-item-price"><img src="images/misc/ethereum.svg" alt="" /><span>0.059</span>($253.67)</div>


                                        {/* <a href="#" className="btn-main btn-lg" data-bs-toggle="modal" data-bs-target="#buy_now">
                                            Buy Now
                                        </a> */}
                                        <Button onClick={() => setOpenBuyModal(true)} className="buy_btn">Buy Now</Button>

                                        <Button onClick={() => setOpenBidModal(true)} className="bid_btn">Place a Bid</Button>

                                        {/* <a href="#" className="btn-main btn-lg btn-light" data-bs-toggle="modal" data-bs-target="#place_a_bid">
                                            Place a Bid
                                        </a> */}

                                    </div>

                                </div>
                            </div>
                            <div className="spacer-single mt20">

                            </div>
                            <hr />
                            <div className="spacer-single">

                            </div>
                            <div className="col-sm-12">
                                <div id="blog-comment">
                                    <h4>Comments (5)</h4>

                                    <div className="spacer-half"></div>

                                    <ol>
                                        <li>
                                            <div className="avatar">
                                                <img src="images/misc/avatar-2.jpg" alt="" /></div>
                                            <div className="comment-info">
                                                <span className="c_name">John Smith</span>
                                                <span className="c_date id-color">15 January 2020</span>
                                                <span className="c_reply"><a href="#">Reply</a></span>
                                                <div className="clearfix"></div>
                                            </div>

                                            <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                            <ol>
                                                <li>
                                                    <div className="avatar">
                                                        <img src="images/misc/avatar-2.jpg" alt="" /></div>
                                                    <div className="comment-info">
                                                        <span className="c_name">John Smith</span>
                                                        <span className="c_date id-color">15 January 2020</span>
                                                        <span className="c_reply"><a href="#">Reply</a></span>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                        explicabo.</div>
                                                </li>
                                            </ol>
                                        </li>

                                        <li>
                                            <div className="avatar">
                                                <img src="images/misc/avatar-2.jpg" alt="" /></div>
                                            <div className="comment-info">
                                                <span className="c_name">John Smith</span>
                                                <span className="c_date id-color">15 January 2020</span>
                                                <span className="c_reply"><a href="#">Reply</a></span>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                            <ol>
                                                <li>
                                                    <div className="avatar">
                                                        <img src="images/misc/avatar-2.jpg" alt="" /></div>
                                                    <div className="comment-info">
                                                        <span className="c_name">John Smith</span>
                                                        <span className="c_date id-color">15 January 2020</span>
                                                        <span className="c_reply"><a href="#">Reply</a></span>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                        explicabo.</div>
                                                </li>
                                            </ol>
                                        </li>

                                        <li>
                                            <div className="avatar">
                                                <img src="images/misc/avatar-2.jpg" alt="" /></div>
                                            <div className="comment-info">
                                                <span className="c_name">John Smith</span>
                                                <span className="c_date id-color">15 January 2020</span>
                                                <span className="c_reply"><a href="#">Reply</a></span>

                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                        </li>
                                    </ol>

                                    <div className="spacer-single"></div>

                                    <div id="comment-form-wrapper">
                                        <h4>Leave a Comment</h4>
                                        <div className="comment_form_holder">
                                            <form id="contact_form" name="form1" className="form-border" method="post" action="#">

                                                <label>Name</label>
                                                <input type="text" name="name" id="name" className="form-control" />

                                                <label>Email <span className="req">*</span></label>
                                                <input type="text" name="email" id="email" className="form-control" />
                                                <div id="error_email" className="error">Please check your email</div>

                                                <label>Message <span className="req">*</span></label>
                                                <textarea cols="10" rows="10" name="message" id="message" className="form-control"></textarea>
                                                <div id="error_message" className="error">Please check your message</div>
                                                <div id="mail_success" className="success">Thank you. Your message has been sent.</div>
                                                <div id="mail_failed" className="error">Error, email not sent</div>

                                                <p id="btnsubmit">
                                                    <input type="submit" id="send" value="Send" className="btn btn-main" /></p>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Buy useOpen={() => [openBuyModal, setOpenBuyModal]} />
            <PlaceBid useOpen={() => [openBidModal, setOpenBidModal]} />
            <div className="modal fade" id="buy_now" tabindex="-1" aria-labelledby="buy_now" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered de-modal">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="p-3 form-border">
                                <h3>Checkout</h3>
                                You are about to purchase a <b>Cig Swaag</b> from <b>Monica Lucas</b>
                                <div className="spacer-single"></div>
                                <h6>Enter quantity. <span className="id-color-2">10 available</span></h6>
                                <input type="text" name="buy_now_qty" id="buy_now_qty" className="form-control" value="1" />
                                <div className="spacer-single"></div>
                                <div className="de-flex">
                                    <div>Your balance</div>
                                    <div><b>10.67856 ETH</b></div>
                                </div>
                                <div className="de-flex">
                                    <div>Service fee 2.5%</div>
                                    <div><b>0.00325 ETH</b></div>
                                </div>
                                <div className="de-flex">
                                    <div>You will pay</div>
                                    <div><b>0.013325 ETH</b></div>
                                </div>
                                <div className="spacer-single"></div>
                                <a href="#" target="_blank" className="btn-main btn-fullwidth">Add funds</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="place_a_bid" tabindex="-1" aria-labelledby="place_a_bid" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered de-modal">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="p-3 form-border">
                                <h3>Place a Bid</h3>
                                You are about to place a bid for <b>Cig Swaag</b> from <b>Monica Lucas</b>
                                <div className="spacer-single"></div>
                                <h6>Your bid (ETH)</h6>
                                <input type="text" name="bid_value" id="bid_value" className="form-control" placeholder="Enter bid" />
                                <div className="spacer-single"></div>
                                <h6>Enter quantity. <span className="id-color-2">10 available</span></h6>
                                <input type="text" name="bid_qty" id="bid_qty" className="form-control" value="1" />
                                <div className="spacer-single"></div>
                                <div className="de-flex">
                                    <div>Your bidding balance</div>
                                    <div><b>0.013325 ETH</b></div>
                                </div>
                                <div className="de-flex">
                                    <div>Your balance</div>
                                    <div><b>10.67856 ETH</b></div>
                                </div>
                                <div className="de-flex">
                                    <div>Service fee 2.5%</div>
                                    <div><b>0.00325 ETH</b></div>
                                </div>
                                <div className="de-flex">
                                    <div>You will pay</div>
                                    <div><b>0.013325 ETH</b></div>
                                </div>
                                <div className="spacer-single"></div>
                                <a href="#" target="_blank" className="btn-main btn-fullwidth">Place a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ItemDetailsPage