import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import { Tab } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillAccountBook } from 'react-icons/ai'
import { PrivateLayout } from '../Layouts'
import Tags from '../Miscellaneous/Tags'

const CreateBlog = () => {

    const [tagValue, setTagValue] = useState('art');
    const [formData, setFormData] = useState({
        image: "",
        heading: "",
        tag: tagValue || "",
        message: ""
    })
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleTagChange = (event, newValue) => {
        setFormData((prev) => ({ ...prev, ["tag"]: newValue }))
        setTagValue(newValue);
    };

    const handleFileChange = (event) => {
        const { name, files } = event.target;
        if (files[0]) {
            setFormData((prev) => ({ ...prev, [name]: URL.createObjectURL(files[0]) }));
        }
    }

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

    const onError = (errors, e) => console.log(errors, e);

    const handleSubmitData = () => {

        alert(JSON.stringify(formData))
    }

    return (
        <PrivateLayout title='Create Blog'>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                <section aria-label="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <div id="comment-form-wrapper">

                                        <div className="comment_form_holder">
                                            <form id="contact_form" name="form1" className="form-border" onSubmit={handleSubmit(handleSubmitData, onError)}>

                                                <label>Upload Banner</label>
                                                <div className="d-create-file">
                                                    {
                                                        formData.image ? (
                                                            <img src={formData.image} height="100px" width="300px" />
                                                        ) : (
                                                            <>
                                                                <p id="file_name">PNG, JPG, GIF and WEBP.</p>
                                                                <label role="button" for="upload_file" id="get_file" className="btn-main" >Browse</label>
                                                                <input
                                                                    {...register("image", { required: "Image must be required!" })}
                                                                    type="file"
                                                                    name="image"
                                                                    id="upload_file"
                                                                    onChange={handleFileChange}
                                                                />
                                                            </>
                                                        )
                                                    }

                                                    {/* <p id="file_name">PNG, JPG, GIF and WEBP</p>
                                                    <input type="button" id="get_file" className="btn-main" value="Browse" />
                                                    <input type="file" id="upload_file" /> */}
                                                </div>
                                                {errors.image && <p style={{ color: 'red' }}>{errors.image.message}</p>}
                                                <div className="spacer-single"></div>
                                                <label>Heading <span className="req">*</span></label>
                                                <input type="text"
                                                    {...register("heading", { required: "Heading must be required!" })}
                                                    name="heading"
                                                    id="heading"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                />
                                                <div id="heading" className="">Min 100 text.</div>
                                                {errors.heading && <p style={{ color: 'red' }}>{errors.heading.message}</p>}
                                                <div className="spacer-single"></div>
                                                <label>Tags <span className="req">*</span></label>
                                                <div className="tags_selection">
                                                    <Tags />
                                                </div>
                                                <label>Description <span className="req">*</span></label>
                                                <textarea
                                                    {...register("message", { required: "Description must be required!" })}
                                                    cols="10"
                                                    rows="10"
                                                    name="message"
                                                    id="message"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                >
                                                </textarea>
                                                {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}
                                                <div id="error_message" className="error">Please check your message</div>
                                                <div id="mail_success" className="success">Thank you. Your message has been sent.</div>
                                                <div id="mail_failed" className="error">Error, email not sent</div>

                                                <input
                                                    type="submit"
                                                    id="submit"
                                                    className="btn-main "
                                                    value="Create Item"
                                                />


                                            </form>
                                        </div>
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

export default CreateBlog