import { ethers } from 'ethers';
import { useState } from 'react'
import { useContract, useNetwork, useProvider } from 'wagmi'
import { Web3 } from '../helper/Web3';

export const useWeb3 = ({ collectionAddress = "" } = {}) => {
    collectionAddress = typeof collectionAddress === "string" && collectionAddress.trim() ? collectionAddress.trim() : "";

    // const provider = useProvider();
    const [errors, setErrors] = useState([]);
    const [collectionContractaddress, setCollectionContractAddress] = useState(collectionAddress);
    const { chain } = useNetwork();
    const web3 = new Web3(chain);


    const marketplaceContract = useContract({
        address: web3.marketplace.address,
        abi: web3.marketplace.abi,
    });

    const collectionContract = useContract({
        address: collectionContractaddress,
        abi: web3.nft.abi,
    });

    const setCollectionAddress = (address) => {
        address = typeof address === "string" && address.trim() ? address.trim() : "";
        setCollectionContractAddress(address);
    }

    const deploySmartContract = async (args) => {
        try {
            //sign the transaction
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            const signer = provider.getSigner(collectionAddress);
            // const signer = provider.getSigner();
            console.log("test4", signer)
            // The factory we use for deploying contracts
            const factory = new ethers.ContractFactory(web3.nft.abi, web3.nft.byteCode, signer)
            console.log("test5")
            // Deploy an instance of the contract

            const contract = await factory.deploy(...args);
            console.log("conytract", contract)
            const tx = await contract.deployTransaction.wait();
            console.log("test6")
            if (tx) {
                console.log("test7")
                return {
                    status: true,
                    message: "",
                    data: {
                        address: contract.address,
                        contract: contract,
                        transactions: tx
                    }
                }

            } else {
                return {
                    status: false,
                    message: "Contract not deployed!",
                    data: false
                }
            }
        } catch (error) {
            return {
                status: false,
                message: error.message,
                data: false
            }
        }
    }

    const authErrors = typeof errors === "object" && errors.length ? errors : [];

    return {
        marketplaceContract,
        collectionContract,
        setCollectionAddress,
        deployContract: deploySmartContract,
        getCurrentChain: web3.getUserChain,
        errors: authErrors.filter(error => error)
    }
}
