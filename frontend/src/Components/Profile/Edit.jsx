import React, { useState } from 'react'
import { useAuth } from '../../context/Auth';
import { getIPFSBaseUrl } from '../../utils';
import { PrivateLayout } from '../Layouts';

export default function EditProfile() {

    const { user } = useAuth();
    const [assets, setAssets] = useState({
        image: "",
        banner: ""
    });
    const [formData, setFormData] = useState({
        username: user?.data?.username || "",
        collegename: user?.data?.collegename || "",
        universityname: user?.data?.universityname || "",
        qualification: user?.data?.qualification || "",
        bio: user?.data?.bio || "",
        email: user?.data?.email || "",
        banner: user.banner || "",
        image: user.image || "",
    })
    console.log(formData, "fom")
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setFormData((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            const name = event.target.name;
            setFormData({
                ...formData,
                [name]: URL.createObjectURL(i)
            })
            setAssets({
                ...assets,
                [name]: event.target.files
            })
        }
    }


    return (
        <div className="tab-8">
            <div className="row wow fadeIn">
                <div className="col-lg-8 mb-sm-20">
                    <div className="field-set">
                        <h5>Username</h5>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter username"
                            value={formData.username}
                        />

                        <div className="spacer-20"></div>

                        <h5>Custom URL</h5>
                        <input
                            type="text"
                            name="customurl"
                            id="customurl"
                            className="form-control"
                            placeholder="Enter your custom URL"
                        />

                        <div className="spacer-20"></div>
                        <h5>College Name</h5>
                        <input
                            type="text"
                            name="collegename"
                            id="collegename"
                            className="form-control"
                            placeholder="Enter your college name"
                            onChange={handleChange}
                            value={formData.collegename}
                        />

                        <div className="spacer-20"></div>
                        <h5>University Name</h5>
                        <input
                            type="text"
                            name="universityname"
                            id="universityname"
                            className="form-control"
                            placeholder="Enter your university name"
                            onChange={handleChange}
                            value={formData.universityname}
                        />

                        <div className="spacer-20"></div>
                        <h5>Highest qualification</h5>
                        <input
                            type="text"
                            name="qualification"
                            id="qualification"
                            className="form-control"
                            placeholder="qualification"
                            onChange={handleChange}
                            value={formData.qualification}
                        />

                        <div className="spacer-20"></div>

                        <h5>Bio</h5>
                        <textarea
                            name="bio"
                            id="bio"
                            className="form-control"
                            placeholder="Tell the world who you are!"
                            onChange={handleChange}
                            value={formData.bio}
                        >

                        </textarea>

                        <div className="spacer-20"></div>

                        <h5>Email Address*</h5>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={handleChange}
                            value={formData.email}
                        />

                        <div className="spacer-20"></div>

                        <h5><i className="fa fa-link"></i> Your site</h5>
                        <input type="text" name="your_site" id="your_site" className="form-control" placeholder="Enter Website URL" />

                        <div className="spacer-20"></div>

                        <h5><i className="fa fa-twitter"></i> Twitter username</h5>
                        <input type="text" name="twitter_usernam" id="twitter_usernam" className="form-control" placeholder="Enter Twitter username" />

                        <div className="spacer-20"></div>

                        <h5><i className="fa fa-instagram"></i> Instagram username</h5>
                        <input type="text" name="instagram_username" id="instagram_username" className="form-control" placeholder="Enter Instagram username" />
                        <div className="spacer-30"></div>
                        <input type="button" id="submit" className="btn-main" value="Update profile" />

                    </div>
                </div>

                <div id="sidebar" className="col-lg-4">
                    <h5>Profile image <i className="fa fa-info-circle id-color-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Recommend 400 x 400. Max size: 50MB. Click the image to upload."></i></h5>

                    <img
                        src={formData.image || "images/author_single/author_thumbnail.jpg"}
                        id="click_profile_img" className="d-profile-img-edit img-fluid"
                        alt=""
                    />
                    <input
                        type="file"
                        id="upload_profile_img"
                        name='image'
                        onChange={handleFileChange}
                    />

                    <div className="spacer-30"></div>

                    <h5>Profile banner <i className="fa fa-info-circle id-color-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Recommend 1500 x 500. Max size: 50MB. Click the image to upload."></i></h5>
                    <img
                        src={formData.banner || "images/author_single/author_banner.jpg"}
                        id="click_banner_img"
                        className="d-banner-img-edit img-fluid"
                        alt=""

                    />
                    <input
                        type="file"
                        id="upload_banner_img"
                        name='banner'
                        onChange={handleFileChange}
                    />

                </div>
            </div>
        </div>
    )
}
