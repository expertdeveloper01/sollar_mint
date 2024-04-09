
import { ButtonBase, Chip, CircularProgress, FormLabel, Grid, Tooltip } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineCheck } from 'react-icons/ai';
import CollectionFormModal from '../CollectionFormModal';
import { useAuth } from '../../context/Auth';
import { ETHEREUM_MARKETPLACE_CONTRACT_ADDRESS, followStepError, formatSolidityError, getIPFSBaseUrl, GetNftMarketContract, NFT_ABI, NFT_MARKET_PLACE_ABI } from '../../utils';
import PrivateLayout from '../Layouts/PrivateLayout';
import Button from '../Miscellaneous/Button';
import { CustomModal, ModalContent, ModalFooter, ModalHeader } from '../Miscellaneous/modals';
import { ethers } from 'ethers';
import { Link, Navigate } from 'react-router-dom';
import { useAccount, useConnect, useContract, useContractWrite, useNetwork, usePrepareContractWrite, useSigner, useSwitchNetwork } from 'wagmi';
import GetCollection from '../Miscellaneous/GetCollection';
import CancelIcon from '@mui/icons-material/Cancel';
import nftmarketplace from '../../app/artifacts/contracts/SollarCollection.sol/SollarCollection.json'

const defaultFormData = {
    method: "fixed_price",
    image: "",
    price: "",
    unlock_once_purchased: false,
    collection: "",
    title: "",
    description: "",
    royalties: 0,
    number_of_copies: 0
}


const defaultModalValue = {
    assets: {
        isLoader: false,
        isComplete: false,
        isError: false,
        errorMessage: ""
    },
    minting: {
        isLoader: false,
        isComplete: false,
        isError: false,
        errorMessage: ""
    },
    onOwnServer: {
        isLoader: false,
        isComplete: false,
        isError: false,
        errorMessage: ""
    }
}

const Create = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const [open, setOpen] = useState(false);
    const [collectionFormPopupOpen, setCollectionFormPopupOpen] = useState(false);
    const [modal, setModal] = useState(defaultModalValue);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({
        status: false,
        message: ""
    });
    const [assets, setAssets] = useState({
        image: "",
        banner: ""
    });
    const { login, isUserExist } = useAuth({
        middleware: 'guest',
    });
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: signer } = useSigner();

    // use contract with wagmi

    const contract = useContract({
        address: ETHEREUM_MARKETPLACE_CONTRACT_ADDRESS,
        abi: nftmarketplace.abi,
        signerOrProvider: signer,
    })
    console.log("contarctddddd", contract)

    const handleMint = async () => {
        await contract.mintNFT(
            "0x844490F3A13F03f643e061e203381643bb1148a9",
            "1"
        );
    }



    const handleFileChange = (event) => {
        const { name, files } = event.target;
        if (files[0]) {
            setFormData((prev) => ({ ...prev, [name]: URL.createObjectURL(files[0]) }));
        }
    }
    const { chain } = useNetwork();
    const { address } = useAccount();

    const selectedNetworkName = (window.location.search).replace("?", "").toLowerCase();


    const removeAsset = (event) => {
        const { name } = event.target;
        setAssets((prev) => ({ ...prev, [name]: "", image: "" }));
        setFormData((prev) => ({ ...prev, [name]: "", image: "" }));
        setIsLoading(false);
    }

    const handleChange = (event) => {
        let { name, value, type } = event.target;
        if (type === "checkbox" || type === "radio") value = !formData[name];
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleClick = (value, type = "method") => {
        setFormData(prev => ({ ...prev, [type]: value }))
    }

    const handleSelectChange = (value, others) => {
        console.log("others", others)
        setFormData({
            ...formData,
            ["collection"]: others.id || "",
        });
    }
    const setFollowStepError = (slug, message) => {
        const newModal = followStepError(slug, message, defaultModalValue);
        setModal({ ...newModal });
    }

    const tryAgainModal = async () => {
        try {
            let newModal = modal;
            ["assets", "minting", "onOwnServer"].forEach(async (element) => {
                try {
                    const modalAsset = newModal[element];
                    if (modalAsset.isError) {
                        if (element === "assets") {
                            await uploadAssetsOnIPFS();
                        } else if (element === "minting") {
                            await nftMinting();
                        } else if (element === "onOwnServer") {
                            await submitNftItem();
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
        console.log("test1")
        setIsLoading(true);
        await handleMint();
        return
        try {
            const newFormData = formData;
            const result = newFormData;
            if (result) {
                setOpen(true);
                await uploadAssetsOnIPFS();
            } else {
                setIsError({
                    status: true,
                    message: result.errors.shift()
                })
            }
        } catch (error) {
            let errorData = formatSolidityError(error.message);
            if (!errorData.slug) {
                errorData.slug = "assets";
            }
            setFollowStepError(errorData.slug, errorData.message);
        }
        setIsLoading(false);
    }

    // Save nft assets on IPFS Server
    const uploadAssetsOnIPFS = async () => {
        console.log("test2")
        try {
            // if (!isUserExist) {
            //     await login();
            //     return;
            // }
            setModal({
                ...{
                    assets: {
                        isLoader: true,
                        isComplete: false,
                        isError: false,
                        errorMessage: ""
                    },
                    minting: {
                        isLoader: false,
                        isComplete: false,
                        isError: false,
                        errorMessage: ""
                    },
                    onOwnServer: {
                        isLoader: false,
                        isComplete: false,
                        isError: false,
                        errorMessage: ""
                    }
                }
            })

            // upload assets on IPFS Server
            const nftImage = "QmXj9KasFWsAB4d66bybiQ2HtxmdiP35iZn4icsDVoUoxu";
            // const nftAssetBanner  = "";
            // const nftImage = await uploadOnIPFSServer(assets.image);
            // const nftAssetBanner = assets.banner ? await uploadOnIPFSServer(assets.banner) : "";

            // setMetadata
            const metadataUrl = "QmSqrQsA3AYWJaHyFEgXRFHLNobkrTmXVbg1f7GNiMtnFp";
            const { title, description, properties, externalLink } = formData;
            const metadata = {
                name: title,
                description,
                attributes: properties,
                external_url: externalLink,
                image: getIPFSBaseUrl(nftImage),
            };
            // const metadataUrl = await uploadOnIPFSServer(JSON.stringify(metadata));

            setAssets({
                image: "",
                banner: ""
            });

            setFormData({
                ...formData,
            });

            await nftMinting(metadataUrl);
        } catch (error) {
            console.log("eror", error, error.message)
            let errorData = formatSolidityError(error.message);
            if (!errorData.slug) {
                errorData.slug = "assets";
            }
            throw new Error(JSON.stringify(errorData));
        }
    }

    const nftMinting = async (metadata = "") => {
        console.log("test3")
        console.log("formDAta", formData)
        try {
            // if (!isUserExist) {
            //     login();
            //     return;
            // }
            setModal({
                ...{
                    assets: {
                        isLoader: false,
                        isComplete: true,
                        isError: false,
                        errorMessage: ""
                    },
                    minting: {
                        isLoader: true,
                        isComplete: false,
                        isError: false,
                        errorMessage: ""
                    },
                    onOwnServer: {
                        isLoader: false,
                        isComplete: false,
                        isError: false,
                        errorMessage: ""
                    }
                }
            })

            // const collectionData = await getCollectionById(formData.collection ? formData.collection : "diamond_verse");
            const collectionData = {
                contractAddress: "0x844490F3A13F03f643e061e203381643bb1148a9"
            }
            metadata = metadata ? metadata : formData.metadata;
            if (!metadata) throw new Error("Invalid metadata url!");
            var price = "0";
            const listItemPrice = ethers.utils.parseUnits((price).toString(), "ether");
            const marketPlaceTransaction = await contract.mintNFT(
                collectionData.contractAddress,
                getIPFSBaseUrl(metadata)
            );
            const itemTx = await marketPlaceTransaction.wait();
            if (itemTx) {
                let event = itemTx.events.find((e) => e.args);
                if (event?.args) {
                    const newFormData = {
                        ...formData,
                        metadata,
                        itemId: event.args["itemId"].toString(),
                        tokenId: event.args["tokenId"].toString(),
                        transactions: itemTx,
                        selectedNetwork: chain || {}
                    }
                    setFormData(newFormData);
                    await submitNftItem(newFormData);
                } else {
                    const message = "Something went wrong during minting!"
                    throw new Error(JSON.stringify({ slug: "minting", message }));
                }
            } else {
                const message = "Something went wrong during minting!"
                throw new Error(JSON.stringify({ slug: "minting", message }));
            }
        } catch (error) {
            let errorData = formatSolidityError(error.message);
            if (!errorData.slug) {
                errorData.slug = "minting";
            }
            throw new Error(JSON.stringify(errorData));
        }
    }


    const submitNftItem = async (data = {}) => {
        try {
            // if (!isUserExist) {
            //     login();
            //     return;
            // }
            setModal({
                ...{
                    assets: {
                        isLoader: false,
                        isComplete: true,
                        isError: false,
                        errorMessage: ""
                    },
                    minting: {
                        isLoader: false,
                        isComplete: true,
                        isError: false,
                        errorMessage: ""
                    },
                    onOwnServer: {
                        isLoader: true,
                        isComplete: false,
                        isError: false,
                        errorMessage: ""
                    }
                }
            })
            data = Object.keys(data).length ? data : formData;
            // const userSign = await loginUserSigner()
            // if (!userSign.status) {
            //     throw new Error(JSON.stringify({ slug: "onOwnServer", message: userSign.message }));
            // }
            return;
            // const result = await saveNft({
            //     ...data,
            // });
            // if (result.status === "success") {
            //     setRedirectNftItemUrl(`/discover/${result.data._id}`)
            //     setModal({
            //         ...{
            //             assets: {
            //                 isLoader: false,
            //                 isComplete: true,
            //                 isError: false,
            //                 errorMessage: ""
            //             },
            //             minting: {
            //                 isLoader: false,
            //                 isComplete: true,
            //                 isError: false,
            //                 errorMessage: ""
            //             },
            //             onOwnServer: {
            //                 isLoader: false,
            //                 isComplete: true,
            //                 isError: false,
            //                 errorMessage: ""
            //             }
            //         }
            //     })
            // } else {
            //     const message = result.message || "something went wrong"
            //     throw new Error(JSON.stringify({ slug: "onOwnServer", message }));
            // }
        } catch (error) {
            let errorData = formatSolidityError(error.message);
            if (!errorData.slug) {
                errorData.slug = "onOwnServer";
            }
            throw new Error(JSON.stringify(errorData));
        }

    }

    if (chain.network.toLowerCase() !== selectedNetworkName) {
        return (
            <Navigate to='/wallets' />
        )
    }


    
    return (
        <PrivateLayout title='Create Single Collectible'>
            <div className="no-bottom no-top" id="content">
                <section aria-label="section">
                    <div className="container">
                        <div className="row wow fadeIn">
                            <div className="col-lg-8">
                                <h5>Choose wallet </h5>
                                <div className="show_network">
                                    {chain && (
                                        <>
                                            <img
                                                src={chain.name === "Polygon Mumbai" && "icons/polygon.svg" || chain.name === "Goerli" && "icons/etherum.svg" || chain.name === "Binance Smart Chain Testnet" && "icons/solana.svg"}
                                                alt="wallet"
                                                style={{
                                                    borderRadius: "50%"
                                                }}
                                            />
                                            <h5>{(address.substring(0, 12))}...</h5>
                                            <h4>{chain.name}</h4>
                                            <Chip label="Connected" className='connected' />
                                        </>
                                    )}

                                </div>
                                <form id="form-create-item" className="form-border" onSubmit={handleSubmit(submitData)}>
                                    <div className="field-set">
                                        <h5>Upload file</h5>

                                        <div className="d-create-file">
                                            {
                                                formData.image ? (
                                                    <>
                                                        <span onClick={(e) => removeAsset(e)} className="remove-image"><CancelIcon /></span>
                                                        <img
                                                            src={formData.image}
                                                            height="200px"
                                                            width="400px"
                                                            alt="image"
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                                                        <label role="button" for="upload_file" id="get_file" className="btn-main" >Browse</label>
                                                        <input
                                                            {...register("image", { required: "Image must be required!" })}
                                                            type="file"
                                                            name="image"
                                                            onChange={handleFileChange}
                                                            id="upload_file"
                                                        />
                                                    </>
                                                )
                                            }
                                        </div>
                                        {errors.image && <p style={{ color: 'red' }}>{errors.image.message}</p>}

                                        <div className="spacer-40"></div>

                                        <h5>Select method</h5>
                                        <div className="de_tab tab_methods">
                                            <ul className="de_nav flexColumn">
                                                <li className={formData.method === "fixed_price" ? "active" : ""} onClick={() => handleClick("fixed_price")}>
                                                    <span><i className="fa fa-tag"></i>Fixed price</span>
                                                </li>
                                                <li className={formData.method === "open_for_bids" ? "active" : ""} onClick={() => handleClick("open_for_bids")}>
                                                    <span><i className="fa fa-users"></i>Open for bids</span>
                                                </li>
                                            </ul>

                                            <div className="de_tab_content">
                                                <div id="tab_opt_1">
                                                    <h5>Price</h5>
                                                    <input
                                                        {...register("price", { required: "Price must be required!" })}
                                                        type="number"
                                                        step={0.1}
                                                        min={0}
                                                        name="price"
                                                        onChange={handleChange}
                                                        id="item_price"
                                                        className="form-control"
                                                        placeholder="enter price for one item (ETH)"
                                                    />
                                                </div>
                                                {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}
                                                <div id="tab_opt_2"></div>
                                            </div>

                                        </div>

                                        <div className="spacer-20"></div>

                                        <div className="switch-with-title">
                                            <h5><i className="fa fa- fa-unlock-alt id-color-2 icon_padlock"></i>Unlock once purchased</h5>
                                            <div className="de-switch">
                                                <input type="checkbox" name='unlock_once_purchased' checked={formData.unlock_once_purchased} onChange={handleChange} id="switch-unlock" className="checkbox" />
                                                <label for="switch-unlock"></label>
                                            </div>
                                            <div className="clearfix"></div>
                                            <p className="p-info">Unlock content after successful transaction.</p>

                                            <div className="hide-content">
                                                <input type="text" name="item_unlock" id="item_unlock" className="form-control" placeholder="Access key, code to redeem or link to a file..." />
                                            </div>
                                        </div>

                                        <div className="spacer-20"></div>

                                        <h5>Choose collection</h5>
                                        <div className="d-flex newCOllection">
                                            <p className="p-info">This is the collection where your item will appear.</p>
                                            <span style={{ marginLeft: '10px', marginBottom: '10px' }}>
                                                <Button onClick={() => setCollectionFormPopupOpen(true)}>
                                                    create new
                                                </Button>
                                            </span>
                                            {/* <a data-bs-toggle="modal" data-bs-target="#buy_now" className="btn-main btn-wallet">Create New</a> */}
                                        </div>

                                        <GetCollection value={formData.collection} handleChange={handleSelectChange} />

                                        <div className="spacer-20"></div>

                                        <h5>Title</h5>
                                        <input
                                            {...register("title", { required: "Title must be required" })}
                                            type="text"
                                            name="title"
                                            id="item_title"
                                            value={formData.title}
                                            className="form-control"
                                            placeholder="e.g. 'Crypto Funk"
                                            onChange={handleChange}
                                        />
                                        {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                                        <div className="spacer-20"></div>

                                        <h5>Description</h5>
                                        <textarea
                                            {...register("description", { required: 'Description must be required!' })}
                                            data-autoresize
                                            name="description"
                                            id="description"
                                            value={formData.description}
                                            className="form-control"
                                            placeholder="e.g. 'This is very limited item'"
                                            onChange={handleChange}>

                                        </textarea>
                                        {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
                                        <div className="spacer-20"></div>

                                        <h5>Royalties</h5>
                                        <input type="number" name="royalties" step={10} max={70} min={0} value={formData.royalties > 0 ? formData.royalties : ""} id="royalties" className="form-control" placeholder="suggested: 0, 10%, 20%, 30%. Maximum is 70%" onChange={handleChange} />

                                        <div className="spacer-single"></div>

                                        <h5>Number of copies</h5>
                                        <input type="number" name="number_of_copies" min={0} value={formData.number_of_copies > 0 ? formData.number_of_copies : ""} id="item_number_of_copies" className="form-control" placeholder="E.g. 25" onChange={handleChange} />

                                        <div className="spacer-single"></div>

                                        <input
                                            type="submit"
                                            id="submit"
                                            className="btn-main "
                                            value="Create Item"
                                        />
                                        <div className="spacer-single"></div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <h5>Preview item</h5>
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="author.html">
                                            <div className="posrel">
                                                <img className="lazy" src="images/author/author-10.jpg" alt="" />
                                                <img src="images/check.svg" className="checkimg" />
                                            </div>

                                            <p>Diamond HODLR</p>
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="#">
                                            <img src="images/author/author-10.jpg" className="lazy nft__item_preview" alt="" />
                                        </a>
                                        <div className="blurr_background" data-year="2022" data-month="2" data-day="16" data-hour="8">
                                            <div className="flex-between always">
                                                <div className="bid_amount">
                                                    <p>Start Bid</p>
                                                    <h3>4.73  ETH</h3>
                                                </div>
                                                <div className="bid_amount">
                                                    <p>AUCTION ENDING IN</p>
                                                    <h3>8h : 15m : 25s</h3>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="#">
                                            <h4>Deep Sea Phantasy</h4>
                                        </a>

                                        <div className="nft__item_price">
                                            0.06 ETH<span>1/22</span>

                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#" className="btn-main btn-wallet">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart"></i><span>80</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <CollectionFormModal useOpen={() => [collectionFormPopupOpen, setCollectionFormPopupOpen]} />

            <CustomModal
                fullWidth={true}
                maxWidth="sm"
                aria-labelledby="collection-dialog"
                open={open}
                className="createform_popup"
                onClose={(_, reason) => {
                    if (reason !== "backdropClick") {
                        setOpen(false);
                    }
                }}
            >
                <ModalHeader onClose={() => setOpen(false)}>
                    <span className="font-bold">Follow steps</span>
                </ModalHeader>
                <ModalContent>
                    <Grid className="pt-2" container spacing={2}>
                        <Grid item xs={2} md={2}>
                            {
                                modal.assets.isLoader
                                    ? <CircularProgress size={30} color="secondary" />
                                    : (modal.assets.isComplete ? <AiOutlineCheck color='green' size={30} /> : <AiOutlineCheck className='dark:text-[#fff]' size={30} />)
                            }
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <h1 className="font-bold title_content">Upload Asset </h1>
                            <p>Upload asset on IPFS</p>
                        </Grid>
                        {modal.assets.isError
                            && <Grid item>
                                <p style={{ color: "red", marginLeft: '17%' }}>{modal.assets.errorMessage}</p>
                            </Grid>}
                    </Grid>
                    <Grid className="pt-5" container spacing={2}>
                        <Grid item xs={2} md={2}>
                            {
                                modal.minting.isLoader
                                    ? <CircularProgress size={30} color="secondary" />
                                    : (modal.minting.isComplete ? <AiOutlineCheck color='green' size={30} /> : <AiOutlineCheck className='dark:text-[#fff]' size={30} />)
                            }
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <h1 className="font-bold title_content">Minting</h1>
                            <p>Mint your NFT on ethereum Blockchain</p>
                        </Grid>
                        {modal.minting.isError
                            && <Grid item>
                                <p style={{ color: "red", marginLeft: '17%' }}>{modal.minting.errorMessage}</p>
                            </Grid>}
                    </Grid>
                    <Grid className="pt-5" container spacing={2}>
                        <Grid item xs={2} md={2}>
                            {
                                modal.onOwnServer.isLoader
                                    ? <CircularProgress size={30} color="secondary" />
                                    : (modal.onOwnServer.isComplete ? <AiOutlineCheck color='green' size={30} /> : <AiOutlineCheck className='dark:text-[#fff]' size={30} />)
                            }
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <h1 className="font-bold title_content">Sign message</h1>
                            <p>Sign message with new collection preferences</p>
                        </Grid>
                        {modal.onOwnServer.isError
                            && <Grid item>
                                <p style={{ color: "red", marginLeft: '17%' }}>{modal.onOwnServer.errorMessage}</p>
                            </Grid>}
                    </Grid>
                </ModalContent>
                {
                    modal.onOwnServer.isComplete || modal.assets.isError || modal.minting.isError || modal.onOwnServer.isError ? (
                        <ModalFooter className="steps_popup_button">
                            {
                                modal.onOwnServer.isComplete
                                    ? <Link to="#" passHref>
                                        <Button autoFocus variant="outlined" >VIEW NFT ITEM</Button>
                                    </Link>
                                    : (
                                        modal.assets.isError || modal.minting.isError || modal.onOwnServer.isError
                                            ? <Button autoFocus variant="outlined" onClick={tryAgainModal}>Try again</Button>
                                            : ""
                                    )
                            }
                        </ModalFooter>
                    ) : ""
                }
            </CustomModal>
        </PrivateLayout>
    )
}

export default Create