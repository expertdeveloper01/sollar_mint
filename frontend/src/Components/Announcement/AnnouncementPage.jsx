import { Pagination } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../Layouts'

const AnnouncementPage = () => {
    return (
        <Layout title='Announcements'>

            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                <section aria-label="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb30">
                                <div id="de-submenu-notification" className="">

                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                <div className="d-desc">
                                                    <span className="d-name"><b>Mamie Barnett</b> updated Terms</span>
                                                    <span className="d-time">1 hour ago</span>
                                                    <Link to="/notification-details" className="btn btn-main mt10">Read more</Link>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                <div className="d-desc">
                                                    <span className="d-name"><b>Lori Hart</b> updated about</span>
                                                    <span className="d-time">18 hours ago</span>
                                                    <Link to="/notification-details" className="btn btn-main mt10">Read more</Link>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                <div className="d-desc">
                                                    <span className="d-name"><b>Mamie Barnett</b> updated Terms</span>
                                                    <span className="d-time">1 hour ago</span>
                                                    <Link to="/notification-details" className="btn btn-main mt10">Read more</Link>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                <div className="d-desc">
                                                    <span className="d-name"><b>Lori Hart</b> updated about</span>
                                                    <span className="d-time">18 hours ago</span>
                                                    <Link to="/notification-details" className="btn btn-main mt10">Read more</Link>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                <div className="d-desc">
                                                    <span className="d-name"><b>Mamie Barnett</b> updated Terms</span>
                                                    <span className="d-time">1 hour ago</span>
                                                    <Link to="/notification-details" className="btn btn-main mt10">Read more</Link>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                <div className="d-desc">
                                                    <span className="d-name"><b>Lori Hart</b> updated about</span>
                                                    <span className="d-time">18 hours ago</span>
                                                    <Link to="/notification-details" className="btn btn-main mt10">Read more</Link>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                <div className="d-desc">
                                                    <span className="d-name"><b>Mamie Barnett</b> updated Terms</span>
                                                    <span className="d-time">1 hour ago</span>
                                                    <Link to="/notification-details" className="btn btn-main mt10">Read more</Link>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                <div className="d-desc">
                                                    <span className="d-name"><b>Lori Hart</b> updated about</span>
                                                    <span className="d-time">18 hours ago</span>
                                                    <Link to="/notification-details" className="btn btn-main mt10">Read more</Link>
                                                </div>
                                            </a>
                                        </li>



                                    </ul>
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

export default AnnouncementPage