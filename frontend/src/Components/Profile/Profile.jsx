import React from 'react'
import { useAuth } from '../../context/Auth';
import PrivateLayout from '../Layouts/PrivateLayout'
import Author from './Author';
import EditProfile from './Edit';
import ProfileNfts from './Nfts';
import Notification from './Notification';
import ProfileTab from './Tab';

const ProfilePage = () => {

    const { user, isLoading } = useAuth();

    return (
        <PrivateLayout title='Profile'>
            <div className="row">
                <div className="col-md-3 mt-30">
                    <div className="d_profile filter_box">
                        <div className="de-flex-col">
                            <div className="">
                                <div className="profile_avatar">
                                    <img src={user?.data.image || "images/author_single/author_thumbnail.jpg"} alt="profile_image" />
                                    <img src="images/check.svg" className="checkimg" />
                                </div>

                                <div className="profile_name">
                                    <h4>
                                        {user?.data?.name || ""}
                                        <span className="profile_username">@{user?.data?.username}</span>
                                        <span id="wallet" className="profile_wallet">{user?.data?.address}</span>
                                        <button id="btn_copy" title="Copy Address">Copy</button>
                                    </h4>

                                </div>
                                <small>
                                    {user?.data?.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eum a earum obcaecati sit expedita numquam deserunt nam quasi totam."}
                                </small>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-md-9 mt60">
                    <div className="de_tab tab_simple">
                        <ProfileTab />
                        {/* <ul className="de_nav">
                            <li className="active"><span>On Sale</span></li>
                            <li><span>Created</span></li>
                            <li><span>Liked</span></li>
                            <li><span>Watchlist</span></li>
                            <li><span>Followed</span></li>
                            <li><span>Followers</span></li>
                            <li><span>Notifications</span></li>
                            <li><span>Edit Profile</span></li>
                        </ul> */}

                        <div className="de_tab_content">
                            <div>
                                <ProfileNfts />
                            </div>
                            <div>
                                <Author />
                            </div>
                            <div>

                                <Notification />
                            </div>
                            <div id='profile_edit'>
                                <EditProfile />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </PrivateLayout>
    )
}

export default ProfilePage