
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress, DialogActions, Grid, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { CustomModal, ModalContent, ModalFooter, ModalHeader } from './Miscellaneous/modals';
import Modal from './Miscellaneous/Modal';
import { API_BASE_URL, followStepError, formatSolidityError, getIPFSBaseUrl, NFT_ABI, NFT_BYTECODE, toCaptalize } from '../utils';
import { useAuth } from '../app/hook';
import { ethers } from 'ethers';
import { useAccount, useNetwork } from 'wagmi';
import { useWeb3 } from '../app/hook';
import Category from './Miscellaneous/Category';
import { PrivateLayout } from './Layouts';
import Button from './Miscellaneous/Button';
import axios, { csrf } from '../utils/axios';
import { Link } from 'react-router-dom';




const defaultModalValue = {
    assets: {
        isLoader: false,
        isComplete: false,
        isError: false,
        errorMessage: ""
    },
    contractDeploy: {
        isLoader: false,
        isComplete: false,
        isError: false,
        errorMessage: ""
    },
    completed: {
        isLoader: false,
        isComplete: false,
        isError: false,
        errorMessage: ""
    }
}


export default function CollectionFormModal({ useOpen }) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [open, setOpen] = useOpen();
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpen(false);
    const [modal, setModal] = useState(defaultModalValue);
    const [isValidError, setIsValidError] = useState({
        valid: true,
        message: ""
    });
    const { login, isUserExist } = useAuth({
        middleware: 'guest',
    });
    const { deployContract } = useWeb3();
    const { address, connector, status } = useAccount();
    // const provider = useProvider();
    const userAddress = address || ""
    const [formData, setFormData] = useState({
        banner: "",
        cover: "",
        name: "",
        token: "",
        description: "",
        category: ""
    })
    const [assets, setAssets] = useState({
        banner: "",
        cover: ""
    });
    const { chain } = useNetwork();


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

    const handleSelectChange = (value, others) => {
        setFormData({
            ...formData,
            ["category"]: others.id || "",
        });
    }

    const handleFileChange = (event) => {
        const { files, name } = event.target;
        if (files[0]) {
            setAssets((prev) => ({ ...prev, [name]: files[0] }));
            setFormData((prev) => ({ ...prev, [name]: URL.createObjectURL(files[0]) }));
        }
    }
    const setFollowStepError = (slug, message) => {
        const newModal = followStepError(slug, message, defaultModalValue);
        setModal(newModal);
    }

    const tryAgainModal = async () => {
        try {
            let newModal = modal;
            ["assets", "contractDeploy", "completed"].forEach(async (element) => {
                try {
                    const modalAsset = newModal[element];
                    if (modalAsset.isError) {
                        if (element === "assets") {
                            await uploadAssetsOnIPFS();
                        } else if (element === "contractDeploy") {
                            await deployContractData();
                        } else if (element === "completed") {
                            await saveOnOwnServer();
                        }
                    }
                } catch (error) {
                    let errorData = formatSolidityError(error.message);
                    if (!errorData.slug) {
                        errorData.slug = "assets";
                    }
                    setFollowStepError(errorData.slug, errorData.message);
                }
            });
        } catch (error) {
            let errorData = formatSolidityError(error.message);
            if (!errorData.slug) {
                errorData.slug = "assets";
            }
            setFollowStepError(errorData.slug, errorData.message);
        }
    }

    const submitData = async () => {
        try {
            const newFormData = formData;
            const result = newFormData;
            if (result) {
                setOpenModal(true)
                await uploadAssetsOnIPFS();
            } else {
                setIsValidError({
                    valid: false,
                    message: result.errors.shift()
                });
            }
        } catch (error) {
            let errorData = formatSolidityError(error.message);
            if (!errorData.slug) {
                errorData.slug = "assets";
            }
            setFollowStepError(errorData.slug, errorData.message);
        }
    }

    const uploadAssetsOnIPFS = async () => {
        console.log("test2")
        try {
            setModal({
                assets: {
                    isLoader: true,
                    isComplete: false,
                    isError: false,
                    errorMessage: ""
                },
                contractDeploy: {
                    isLoader: false,
                    isComplete: false,
                    isError: false,
                    errorMessage: ""
                },
                completed: {
                    isLoader: false,
                    isComplete: false,
                    isError: false,
                    errorMessage: ""
                }
            })
            // upload assets on IPFS Server
            const bannerImage = "QmY1Kxj5GAVTnGP5xM8cdPUr44FDCxNe3bK7ZmjFApX8rT";
            const coverImage = "QmVnwwvW6CNP87BSj8ErJKSGPtmzs8xreqHDAujq35S9Rg";

            // const bannerImage = await uploadOnIPFSServer(assets.banner);
            // const coverImage = await uploadOnIPFSServer(assets.cover);
            const imagesData = {
                banner: bannerImage,
                cover: coverImage
            }
            // setImages(imagesData);
            const newFormData = formData
            setFormData(newFormData);
            await deployContractData(newFormData);
        } catch (error) {
            let errorData = formatSolidityError(error.message);
            if (!errorData.slug) {
                errorData.slug = "assets";
            }
            throw new Error(JSON.stringify(errorData));
        }
    }

    const deployContractData = async (data = {}) => {
        console.log("tets3")
        try {
            if (!isUserExist) {
                await login();
                return;
            }

            setModal({
                assets: {
                    isLoader: false,
                    isComplete: true,
                    isError: false,
                    errorMessage: ""
                },
                contractDeploy: {
                    isLoader: true,
                    isComplete: false,
                    isError: false,
                    errorMessage: ""
                },
                completed: {
                    isLoader: false,
                    isComplete: false,
                    isError: false,
                    errorMessage: ""
                }
            })
            // imageData = Object.keys(imageData).length ? imageData : images;
            data = Object.keys(data).length ? data : formData;

            //sign the transaction
            // const signer = web3.library.getSigner();
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            const signer = provider.getSigner(address);
            console.log("signer", signer)
            // The factory we use for deploying contracts
            const factory = new ethers.ContractFactory(NFT_ABI, NFT_BYTECODE, signer)
            // const factory = new ethers.ContractFactory(NFT_ABI, NFT_BYTECODE, signer)
            // Deploy an instance of the contract
            console.log("test4", userAddress)
            console.log(data, "data")
            const contract = await factory.deploy(
                data.name,
                data.token,
                "1"
                // parseFl1oat(data.creatorEarning > 0 ? data.creatorEarning : "0"),
                // data.creatorEarningAddress ? data.creatorEarningAddress : userAddress
            );
            // await contract.deployed();
            // return;
            console.log("tett5")
            const tx = await contract.deployTransaction.wait();
            console.log("tet6")
            if (tx) {
                data.address = contract.address;
                data.contract = contract;
                data.transactions = tx;
                setFormData({ ...data })
                // await deployContract(data);
                await saveOnOwnServer(data);
            } else {
                throw new Error(JSON.stringify({
                    slug: "contractDeploy",
                    message: "Something went wrong!"
                }));
            }
        } catch (error) {
            let errorData = formatSolidityError(error.message);
            if (!errorData.slug) {
                errorData.slug = "contractDeploy";
            }
            throw new Error(JSON.stringify(errorData));
        }
    }

    const saveOnOwnServer = async (data = {}) => {
        console.log("test855555", data)
        try {
            let newErrors = [];
            const dree = await csrf().catch(error => newErrors.push(error.message));
            if (!isUserExist) {
                await login();
                return;
            }
            setModal({
                assets: {
                    isLoader: false,
                    isComplete: true,
                    isError: false,
                    errorMessage: ""
                },
                contractDeploy: {
                    isLoader: false,
                    isComplete: true,
                    isError: false,
                    errorMessage: ""
                },
                completed: {
                    isLoader: true,
                    isComplete: false,
                    isError: false,
                    errorMessage: ""
                }
            })
            // const userSign = await loginUserSigner()
            // if (!userSign.status) {
            //     throw new Error(JSON.stringify({ slug: "completed", message: userSign.message }));
            // }

            data = Object.keys(data).length ? data : formData;

            const options = {
                data: {
                    name: data.name || "",
                    address: data.address || "",
                    token: data.token || "",
                    description: data.description || "",
                    banner: data.banner || "",
                    cover: data.cover || "",
                    category_id: data.category || "",
                    payment_token_id: "",
                    network_id: chain.id || "",
                    transaction: data.transactions
                }
            };

            const result = await axios({
                url: "http://127.0.0.1:8000/api/collections",
                method: 'POST',
                data: options,
            })
                .then(result => result.data)
                .catch(error => {
                    console.error(error.response.data.message || error.message)
                    return {
                        status: "error",
                        message: error.message
                    };
                });
            if (result) {
                // setRedirectCollectionUrl(`/collections/${result.data._id}`);
                setModal({
                    assets: {
                        isLoader: false,
                        isComplete: true,
                        isError: false,
                        errorMessage: ""
                    },
                    contractDeploy: {
                        isLoader: false,
                        isComplete: true,
                        isError: false,
                        errorMessage: ""
                    },
                    completed: {
                        isLoader: false,
                        isComplete: true,
                        isError: false,
                        errorMessage: ""
                    }
                })
            } else {
                throw new Error(JSON.stringify({
                    slug: "completed",
                    message: result.message
                }));
            }
        } catch (error) {
            console.log("erorr", error, error.message)
            let errorData = formatSolidityError(error.message);
            if (!errorData.slug) {
                errorData.slug = "completed";
            }
            throw new Error(JSON.stringify(errorData));
        }

    }



    return (
        <>
            <Modal
                title="Create Collection"
                open={open}
                handleClose={handleClose}
            // fullWidth={true}
            // maxWidth="sm"
            >
                <Box sx={{ width: "400px" }}>
                    <Typography variant='div' sx={{ mt: 1 }}>

                        <form onSubmit={handleSubmit(submitData)}>

                            <div className="p-3 form-border">
                                <h6>Upload banner</h6>
                                <div className="d-create-file">
                                    {
                                        formData.banner ? (
                                            <img src={formData.banner} height="200px" width="200px" alt="banner_image" />
                                        ) : (
                                            <>
                                                <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                                                <label role="button" for="upload_file" id="get_file" className="btn-main" >Browse</label>
                                                <input
                                                    {...register("banner", {
                                                        required: "Banner Image is required!"
                                                    })}
                                                    value={formData.banner}
                                                    type="file"
                                                    name="banner"
                                                    id="upload_file"
                                                    onChange={handleFileChange}
                                                />
                                                {/* <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                                                <label for="upload_file_banner" className="btn-main" role="button">Browse</label>
                                                <input
                                                    {...register("banner", {
                                                        required: "Banner Image is required!"
                                                    })}
                                                    onChange={handleFileChange}
                                                    name="banner"
                                                    style={{ opacity: "0", }}
                                                    type="file"
                                                    id="upload_file_banner"
                                                /> */}
                                            </>
                                        )
                                    }
                                </div>
                                {errors.banner && <p style={{ color: 'red' }}>{errors.banner.message}</p>}
                                <div className="spacer-single"></div>
                                <h6>Upload cover</h6>
                                <div className="d-create-file">
                                    {
                                        formData.cover ? (
                                            <img src={formData.cover} height="200px" width="200px" alt="cover_image" />
                                        ) : (
                                            <>
                                                <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                                                <label role="button" for="upload_file" id="get_file" className="btn-main" >Browse</label>
                                                <input
                                                    {...register("cover", {
                                                        required: "Cover Image is required!"
                                                    })}
                                                    value={formData.cover}
                                                    type="file"
                                                    name="cover"
                                                    id="upload_file"
                                                    onChange={handleFileChange}
                                                />
                                            </>
                                        )
                                    }
                                </div>
                                {errors.cover && <p style={{ color: 'red' }}>{errors.cover.message}</p>}
                                <div className="spacer-single"></div>
                                <TextField
                                    label='Name'
                                    id="collection-name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    className="form-control"
                                    placeholder="Display Name"
                                    {...register("name", {
                                        required: "Name is required!"
                                    })}
                                    helperText={errors.name && errors.name.message}
                                    FormHelperTextProps={{
                                        sx: { color: "red" }
                                    }}
                                    onChange={handleChange}
                                />
                                <div className="spacer-single"></div>
                                <TextField
                                    label='Symbol'
                                    id="collection-symbol"
                                    name="token"
                                    value={formData.token.toLocaleUpperCase()}
                                    type="text"
                                    className="form-control"
                                    placeholder="eg: SOL"
                                    {...register("token", {
                                        required: "Symbol is required!"
                                    })}
                                    helperText={errors.token && errors.token.message}
                                    FormHelperTextProps={{
                                        sx: { color: "red" }
                                    }}
                                    onChange={handleChange}
                                />
                                <div className="spacer-single"></div>
                                <TextField
                                    type="text"
                                    label='Description'
                                    id="collection-description"
                                    name="description"
                                    value={formData.description}
                                    className="form-control"
                                    placeholder="Enter Here..."
                                    {...register("description", {
                                        required: "Descriptoin is required!"
                                    })}
                                    multiline
                                    maxRows={1}
                                    helperText={errors.description && errors.description.message}
                                    FormHelperTextProps={{
                                        sx: { color: "red" }
                                    }}
                                    onChange={handleChange}
                                />
                                <div className="spacer-single"></div>
                                <Category value={formData.category} handleChange={handleSelectChange} />
                            </div>
                            <DialogActions>
                                <input
                                    type="submit"
                                    id="submit"
                                    className="btn-main btn-fullwidth"
                                    value="Add Collection"
                                />
                            </DialogActions>
                        </form>

                    </Typography>
                </Box>
            </Modal>
            <CustomModal
                fullWidth={true}
                maxWidth="sm"
                aria-labelledby="collection-dialog"
                open={openModal}
                className="createform_popup"
                onClose={(_, reason) => {
                    if (reason !== "backdropClick") {
                        setOpenModal(false);
                    }
                }}
            >
                <ModalHeader onClose={() => setOpenModal(false)}>
                    <span className="font-bold">Follow steps</span>
                </ModalHeader>
                <ModalContent >
                    <Grid container spacing={2}>
                        <Grid item xs={2} md={2}>
                            {
                                modal.assets.isLoader
                                    ? <CircularProgress size={30} color="secondary" />
                                    : (modal.assets.isComplete ? <AiOutlineCheck color='green' size={30} /> : <AiOutlineCheck className='dark:text-[#fff]' size={30} />)
                            }
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <h1 className="font-bold title_content">Upload images</h1>
                            <p>Upload images on IPFS</p>
                        </Grid>
                        {modal.assets.isError
                            && <Grid item>
                                <p style={{ color: "red", marginLeft: "70px" }}>{modal.assets.errorMessage}</p>
                            </Grid>}
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={2} md={2}>
                            {
                                modal.contractDeploy.isLoader
                                    ? <CircularProgress size={30} color="secondary" />
                                    : (modal.contractDeploy.isComplete ? <AiOutlineCheck color='green' size={30} /> : <AiOutlineCheck className='dark:text-[#fff]' size={30} />)
                            }
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <h1 className="font-bold title_content">Deploy contract</h1>
                            <p>Deploy code for the new collection smart contract</p>
                        </Grid>
                        {modal.contractDeploy.isError
                            && <Grid item>
                                <p style={{ color: "red", marginLeft: "70px" }}>{modal.contractDeploy.errorMessage}</p>
                            </Grid>}
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={2} md={2}>
                            {
                                modal.completed.isLoader
                                    ? <CircularProgress size={30} color="secondary" />
                                    : (modal.completed.isComplete ? <AiOutlineCheck color='green' size={30} /> : <AiOutlineCheck className='dark:text-[#fff]' size={30} />)
                            }
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <h1 className="font-bold title_content">Sign message</h1>
                            <p>Sign message with new collection preferences</p>
                        </Grid>
                        {modal.completed.isError
                            && <Grid item>
                                <p style={{ color: "red", marginLeft: "70px" }}>{modal.completed.errorMessage}</p>
                            </Grid>}
                    </Grid>
                </ModalContent>
                {
                    modal.completed.isComplete || modal.assets.isError || modal.contractDeploy.isError || modal.completed.isError ? (
                        <ModalFooter className="steps_popup_button">
                            {
                                modal.completed.isComplete
                                    ? <Link to="/collection-details">
                                        <Button autoFocus >VIEW COLLECTION</Button>
                                    </Link>
                                    : (
                                        modal.assets.isError || modal.contractDeploy.isError || modal.completed.isError
                                            ? <Button autoFocus
                                                onClick={tryAgainModal}
                                            >Try again</Button>
                                            : ""
                                    )
                            }
                        </ModalFooter>
                    ) : ""
                }
            </CustomModal>
        </>
    )
}
