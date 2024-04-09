import { Pagination } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../Layouts'

const BlogPage = () => {
    return (
        <Layout title='Blog'>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                <section aria-label="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Link className="btn-main" to="/create-blog">Add New Blog</Link>
                            </div>
                            <div className="spacer-single"></div>
                            <div className="col-lg-4 col-md-6 mb30">
                                <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <img alt="" src="images/news/news-1.jpg" className="lazy" />
                                        </div>
                                        <div className="post-text">
                                            <span className="p-tagline">Memes</span>
                                            <span className="p-date">October 28, 2020</span>
                                            <h5 className="p-author">Author: John</h5>
                                            <h4><Link to="/blog-details">The next big trend in crypto<span></span></Link></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                            <Link to="/blog-details">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb30">
                                <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <img alt="" src="images/news/news-1.jpg" className="lazy" />
                                        </div>
                                        <div className="post-text">
                                            <span className="p-tagline">Memes</span>
                                            <span className="p-date">October 28, 2020</span>
                                            <h5 className="p-author">Author: John</h5>
                                            <h4><Link to="/blog-details">The next big trend in crypto<span></span></Link></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                            <Link to="/blog-details">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb30">
                                <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <img alt="" src="images/news/news-1.jpg" className="lazy" />
                                        </div>
                                        <div className="post-text">
                                            <span className="p-tagline">Memes</span>
                                            <span className="p-date">October 28, 2020</span>
                                            <h5 className="p-author">Author: John</h5>
                                            <h4><Link to="/blog-details">The next big trend in crypto<span></span></Link></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                            <Link to="/blog-details">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb30">
                                <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <img alt="" src="images/news/news-1.jpg" className="lazy" />
                                        </div>
                                        <div className="post-text">
                                            <span className="p-tagline">Memes</span>
                                            <span className="p-date">October 28, 2020</span>
                                            <h5 className="p-author">Author: John</h5>
                                            <h4><Link to="/blog-details">The next big trend in crypto<span></span></Link></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                            <Link to="/blog-details">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb30">
                                <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <img alt="" src="images/news/news-1.jpg" className="lazy" />
                                        </div>
                                        <div className="post-text">
                                            <span className="p-tagline">Memes</span>
                                            <span className="p-date">October 28, 2020</span>
                                            <h5 className="p-author">Author: John</h5>
                                            <h4><Link to="/blog-details">The next big trend in crypto<span></span></Link></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                            <Link to="/blog-details">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb30">
                                <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <img alt="" src="images/news/news-1.jpg" className="lazy" />
                                        </div>
                                        <div className="post-text">
                                            <span className="p-tagline">Memes</span>
                                            <span className="p-date">October 28, 2020</span>
                                            <h5 className="p-author">Author: John</h5>
                                            <h4><Link to="/blog-details">The next big trend in crypto<span></span></Link></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                            <Link to="/blog-details">Read more</Link>
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

export default BlogPage