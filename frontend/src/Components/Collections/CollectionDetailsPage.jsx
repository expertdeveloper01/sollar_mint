import React from 'react'
import NftCard from '../card/NftCard'
import { Layout } from '../Layouts'

const CollectionDetailsPage = () => {
    return (
        <Layout title="Collection Details">
            <section aria-label="section" className="d_coll no-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d_profile no_shadow">
                                <div className="profile_avatar">
                                    <div className="d_profile_img">
                                        <img src="images/author/author-1.jpg" alt="" />
                                        <img src="images/check.svg" className="checkimg" />
                                    </div>

                                    <div className="profile_name">
                                        <h4>
                                            Abstraction
                                            <div className="clearfix"></div>
                                            <span id="wallet" className="profile_wallet">creatd By: <a href="user.html">John</a></span>

                                        </h4>
                                    </div>

                                </div>
                                <div className="text-center">
                                    <a className="btn btn-add"><i className="fa fa-plus"></i> Add to Watchlist</a>
                                </div>
                                <div className="width_600">
                                    <div className="collection_base">

                                        <div className="floor_price">
                                            <p>items</p>
                                            <h3>1,124</h3>
                                        </div>
                                        <div className="floor_price">
                                            <p>owners</p>
                                            <h3>1,124</h3>
                                        </div>
                                        <div className="floor_price">
                                            <p>floor price</p>
                                            <h3><img src="images/misc/ethereum.svg" alt="" /> 1,124</h3>
                                        </div>
                                        <div className="floor_price">
                                            <p>voulme traded</p>
                                            <h3><img src="images/misc/ethereum.svg" alt="" /> 1,124</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="de_tab tab_simple">

                                <ul className="de_nav">
                                    <li className="active"><span>On Sale</span></li>
                                    <li><span>Sold</span></li>
                                </ul>

                                <div className="de_tab_content">

                                    <div className="tab-1">
                                        <div className="row">
                                            <NftCard nfts={""} />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default CollectionDetailsPage