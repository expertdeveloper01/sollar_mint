import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { Avatar } from '@mui/material';
import { useQuery } from 'react-query';
import axios from '../../utils/axios';

const Header = () => {

    const { isLoading, isError, data: categories = [], error } = useQuery('categories', {
        queryFn: () => axios.get('/api/categories').then(res => res.data.data)
    });
    const { connect, user, disconnect } = useAuth();

    const handleConnectWallet = () => {
        connect();
    }

    const handleDisconnect = (event) => {
        event.preventDefault();
        disconnect();

    }

    return (
        <header className="header-light scroll-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p0">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">

                                    <div id="logo">
                                        <Link to="/" onClick={window.location.reload}>
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
                                        <Link to="">Stats<span></span></Link>
                                        <ul>
                                            <li><Link to="/rankings">Rankings</Link></li>
                                            <li><Link to="/activities">Activity</Link></li>
                                        </ul>
                                    </li>
                                    <li> <Link to="">Explore<span></span></Link>
                                        <ul>
                                            <li><Link to="/auction">Auction House</Link></li>
                                            <li><Link to="/creators">Hot Creators</Link></li>
                                            <li><Link to="/professionals">Professionals</Link></li>
                                            <li><Link to="/students">Students</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Categories<span></span></Link>
                                        <ul>
                                            {
                                                categories.map((ele, key) => {
                                                    return (
                                                        <li key={key}><Link to="#">{ele.name}</Link></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>

                                    <li> <Link to="/blog">Community<span></span></Link></li>
                                    <li>
                                        <a href="#">Create<span></span></a>
                                        <ul>
                                            <li><Link to="/items-create-start">Nft</Link></li>
                                            <li><Link to="/items-collections" onClick={window.location.reload}>Collection</Link></li>
                                        </ul>
                                    </li>
                                    <li className="token_price">
                                        <span><img src="images/icon.png" alt="" /><i className="fa fa-long-arrow-up green"></i>1.22</span>
                                    </li>
                                    <li>
                                        {
                                            user ? (
                                                <>
                                                    <Avatar sx={{ cursor: "pointer", display: "inline-flex" }} alt={user?.data?.name} src={user?.data?.image || "images/author/author-10.jpg"} />
                                                    <ul>
                                                        <li><Link to="">{(user?.data?.address).substring(0, 12)}...</Link></li>
                                                        <li><Link to="/profile">Profile</Link></li>
                                                        <li><Link to="/notifications">Notifications</Link></li>
                                                        <li><Link to="/collections" onClick={window.location.reload}>My Collection</Link></li>
                                                        <li><Link to="/items-create">Create Item</Link></li>
                                                        <li><a href="" onClick={handleDisconnect}>Disconnect</a></li>
                                                    </ul>
                                                </>
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
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header