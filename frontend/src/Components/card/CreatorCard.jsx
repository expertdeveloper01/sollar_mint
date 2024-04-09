import React from 'react'
import { Link } from 'react-router-dom'

export default function CreatorCard() {
    return (
        <div className="tab-5">
            <div className="row">
                <div className="col-sm-6 mb30">
                    <div className="item_author">
                        <div className="author_list_pp">
                            <Link to="/author">
                                <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                <img src="images/check.svg" className="checkimg" />
                            </Link>
                        </div>
                        <div className="author_list_info">
                            <Link to="/author">Monica Lucas</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb30">
                    <div className="item_author">
                        <div className="author_list_pp">
                            <Link to="/author">
                                <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                <img src="images/check.svg" className="checkimg" />
                            </Link>
                        </div>
                        <div className="author_list_info">
                            <Link to="/author">Monica Lucas</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb30">
                    <div className="item_author">
                        <div className="author_list_pp">
                            <Link to="/author">
                                <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                <img src="images/check.svg" className="checkimg" />
                            </Link>
                        </div>
                        <div className="author_list_info">
                            <Link to="/author">Monica Lucas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
