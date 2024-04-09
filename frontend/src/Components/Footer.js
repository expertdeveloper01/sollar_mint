import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      
        <footer className="footer-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <img src="images/footer_logo.png"  />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4  col-6">
                        <div className="widget">
                            <h5>Marketplace</h5>
                            <ul>
                                 <li><Link to="Category">New</Link></li>
                                                    <li><Link to="Category">Art</Link></li>
                                                    <li><Link to="Category">Collectibles</Link></li>
                                                    <li><Link to="Category">Memes</Link></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4  col-6">
                        <div className="widget">
                            <h5>My Account</h5>
                            <ul>
                                <li><Link to="Collections">Collections</Link></li>
                                <li><Link to="Profile">Profile</Link></li>
                                <li><Link to="Create">Create</Link></li>
                              
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6  col-6">
                        <div className="widget">
                            <h5>Company</h5>
                            <ul>
                                
                                <li><Link to="Privacy">Privacy Policy </Link></li>
                                <li><Link to="Announcement">Announcements</Link></li>
                              
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-8 col-sm-6  col-12">
                        <div className="widget">
                            <h5>Newsletter</h5>
                          
                            <form action="" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                <div className="col text-center posrel">
                                    <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> <a href="#" id="btn-subscribe"><p>I’m In</p></a>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                            <div className="spacer-10"></div>
                            <div className="de-flex-col">
                                <div className="social-icons">
                                    <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-pinterest fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-rss fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                   
                                       <span className="copy">&copy; 2022 Company. All Rights Reserved by company</span>
                                   
                                </div>
                                <div className="de-flex-col">
                                    <Link to="/PrivacyPage">
                                        <span className="copy"> Terms & Conditions</span>
                                     </Link>
                                    <Link to="/PrivacyPage">
                                        <span className="copy ml-20">Privacy Policy</span>
                                     </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
       <Outlet/>
    </div>
  )
}

export default Footer