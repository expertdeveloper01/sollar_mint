import React from 'react'
import { Layout, PrivateLayout } from '../Layouts'

const BlogDetailsPage = () => {
    return (
        <Layout title='Blog Details'>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                <section aria-label="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="blog-read post-content ">

                                    <img alt="" src="images/news/big.jpg" className="img-fullwidth rounded" />
                                    <div className="post_text">

                                    </div>
                                    <div className="post-text">
                                        <span className="p-tagline">Memes</span>
                                        <span className="p-date">October 28, 2020</span>
                                        <h5 className="p-author">Author: John</h5>
                                        <p>Quis sunt quis do laboris eiusmod in sint dolore sit pariatur consequat commodo aliqua nulla ad dolor aliquip incididunt voluptate est aliquip adipisicing ea cupidatat nostrud incididunt aliquip dolore. Sed minim nisi duis laborum est labore nisi amet elit adipisicing proident do consectetur dolor labore sit nisi ad proident esse ad velit nisi irure reprehenderit ut et dolor labore veniam quis.</p>

                                        <blockquote>Design can be art. Design can be simple. That’s why it’s so complicated. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</blockquote>

                                        <p>Sunt duis laboris ex et quis laborum laborum cillum mollit voluptate culpa consequat ex cupidatat dolor eiusmod proident proident cillum pariatur sint adipisicing in nostrud do dolore consectetur quis incididunt minim consectetur. Exercitation elit proident dolor est id eiusmod dolor dolor incididunt ad voluptate laboris cupidatat est est sint veniam sint officia sint incididunt est sit ut tempor commodo pariatur ut proident et do.</p>

                                        <p>Sed eu in ut sint dolor irure fugiat minim veniam sed ea proident ullamco occaecat irure ut velit eu ullamco fugiat cupidatat dolore fugiat. Lorem ipsum id non deserunt id consequat duis voluptate amet aliqua pariatur laboris officia pariatur veniam velit reprehenderit sint nostrud cupidatat magna eiusmod mollit exercitation pariatur nulla minim laboris dolore aliqua consectetur cillum duis aute consectetur.</p>



                                    </div>

                                </div>

                                <div className="spacer-single"></div>

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

                            <div id="sidebar" className="col-md-4">
                                <div className="widget widget-post">
                                    <h4>Recent Posts</h4>
                                    <div className="small-border"></div>
                                    <ul>
                                        <li><span className="date">10 Jun</span><a href="#">Lorem ipsum dolor sit amet.</a></li>
                                        <li><span className="date">22 Jun</span><a href="#">Lorem ipsum dolor sit amet.</a></li>
                                        <li><span className="date">20 Jun</span><a href="#">Lorem ipsum dolor sit amet.</a></li>
                                        <li><span className="date">12 Jun</span><a href="#">Lorem ipsum dolor sit amet.</a></li>

                                    </ul>
                                </div>


                                <div className="widget widget_tags">
                                    <h4>Tags</h4>
                                    <div className="small-border"></div>
                                    <ul>
                                        <li><a href="#link">Art</a></li>
                                        <li><a href="#link">Application</a></li>
                                        <li><a href="#link">Design</a></li>
                                        <li><a href="#link">Entertainment</a></li>
                                        <li><a href="#link">Memes</a></li>
                                        <li><a href="#link">Crypto</a></li>
                                        <li><a href="#link">Music</a></li>
                                        <li><a href="#link">Print</a></li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    )
}

export default BlogDetailsPage