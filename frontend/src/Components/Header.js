import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Web3Button } from '@web3modal/react'
import { useAuth } from '../context/Auth'

const Header = () => {
    const { connect, user } = useAuth();

    const handleConnectWallet = () => {
        connect();
    }

    return (
        <div>

            <header className="header-light scroll-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 p0">
                            <div className="de-flex sm-pt10">
                                <div className="de-flex-col">
                                    <div className="de-flex-col">

                                        <div id="logo">
                                            <Link to="/">
                                                <img alt="" className="logo" src="images/logo-light.png" />
                                                <img alt="" className="logo-2" src="images/logo.png" />
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="de-flex-col">
                                        <div className="navform sm-hide">
                                            <input id="quick_search" className="sm-hide" name="quick_search" placeholder="search item here..." type="text" />
                                            <a href="#" id="btn-submit"><i className="fa fa-search bg-color-transparent"></i></a>
                                        </div>

                                    </div>
                                </div>
                                <div className="de-flex-col header-col-mid">

                                    <ul id="mainmenu">
                                        <li>
                                            <a href="#">Stats<span></span></a>
                                            <ul>
                                                <li><Link to="Rankings">Rankings</Link></li>
                                                <li><Link to="Activities">Activity</Link></li>
                                            </ul>
                                        </li>
                                        <li> <Link to="Explore">Explore<span></span></Link>
                                            <ul>
                                                <li><Link to="Auction">Auction House</Link></li>
                                                <li><Link to="Creators">Hot Creators</Link></li>
                                                <li><Link to="Professionals">Professionals</Link></li>
                                                <li><Link to="Students">Students</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Categories<span></span></a>
                                            <ul>
                                                <li><Link to="Category">New</Link></li>
                                                <li><Link to="Category">Art</Link></li>
                                                <li><Link to="Category">Collectibles</Link></li>
                                                <li><Link to="Category">Memes</Link></li>
                                            </ul>
                                        </li>

                                        <li> <Link to="Blog">Community<span></span></Link></li>
                                        <li> <a href="create">Create<span></span></a></li>
                                        <li className="token_price">
                                            <span><img src="images/icon.png" alt="" /><i className="fa fa-long-arrow-up green"></i>1.22</span>
                                        </li>
                                    </ul>
                                    <div className="menu_side_area">
                                        {
                                            user ? (
                                                <Web3Button />
                                            ) : (
                                                <button
                                                    className="btn-main btn-wallet"
                                                    onClick={handleConnectWallet}
                                                    style={{ padding: "5px 9px" }}
                                                >
                                                    <i className="icon_wallet_alt"></i>
                                                    <span> Connect Wallet</span>
                                                </button>
                                            )
                                        }

                                        {/* <span id="menu-btn"></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </div>
    )
}

export default Header