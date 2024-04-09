import React, { useState } from 'react'
import { PrivateLayout } from '../Layouts'
import ProfileNfts from '../Profile/Nfts'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NftCard from '../card/NftCard';
import { useAuth } from '../../context/Auth';


const CreatorDetailsPage = () => {
    const { user } = useAuth();

    const [value, setValue] = useState('created');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <PrivateLayout title='Author page'>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                <section id="profile_banner" aria-label="section" className="text-light" data-bgimage="url(images/background/subheader.jpg) top">

                </section>

                <section aria-label="section" className="d_coll no-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d_profile no_shadow">
                                    <div className="profile_avatar">
                                        <div className="d_profile_img">
                                            <img src={user?.data?.image || "images/author/author-1.jpg"} alt="profile_image" />
                                            <img src="images/check.svg" className="checkimg" />
                                        </div>

                                        <div className="profile_name">
                                            <h4>
                                                {user?.data?.name || "Peter John"}
                                                <div className="clearfix"></div>
                                                <span id="wallet" className="profile_wallet">{user?.data?.address || ""}</span>
                                                <button id="btn_copy" title="Copy Address">Copy</button>
                                            </h4>
                                            <div className="text-center mb30">
                                                <a href="#" className="btn-main btn-wallet">Follow</a>
                                            </div>
                                            <div className="d-flex social_links">
                                                <a href="#" target="_blank"><i className="fa fa-youtube" ></i></a>
                                                <a href="#" target="_blank"><i className="fa fa-twitter" ></i></a>
                                                <a href="#" target="_blank"><i className="fa fa-instagram" ></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="de_tab tab_simple">
                                    <div style={{ marginLeft: '37%' }}>
                                        <TabContext value={value}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab label="Created" value="created" />
                                                <Tab label="On Auction" value="onauction" />
                                                <Tab label="Liked" value="likes" />

                                            </TabList>

                                        </TabContext>
                                    </div>
                                    {/* <ul className="de_nav">
                                        <li className="active"><span>Created</span></li>
                                        <li><span>on Auction</span></li>
                                        <li><span>Liked</span></li>
                                    </ul> */}
                                    <div className="de_tab_content">
                                        <NftCard nfts={""} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </PrivateLayout>
    )
}

export default CreatorDetailsPage