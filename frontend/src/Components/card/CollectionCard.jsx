import React from 'react';
import { Link } from 'react-router-dom';

export default function CollectionCard() {
    return (
        <section id="section-collections" className="pt60 pb60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="style-2"></h2>
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
    )
}
