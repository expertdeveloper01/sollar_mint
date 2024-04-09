import nftMarketPlace from '../app/artifacts/contracts/SollarMarket.sol/Sollar.json';
import nft from "../app/artifacts/contracts/SollarCollection.sol/SollarCollection.json";

const REACT_APP_IS_TESTNET = process.env.REACT_APP_IS_TESTNET || true;


export const DEFAULT_NETWORK = process.env.REACT_APP_DEFAULT_NETWORK || "ethereum";
export const DEFAULT_NETWORK_CHAIN = process.env.REACT_APP_DEFAULT_NETWORK_CHAIN || "goerli";
export const WALLET_CONNECT_PROJECT_ID = process.env.REACT_APP_WC_PROJECT_ID || "";

export const IS_TESTNET = (typeof REACT_APP_IS_TESTNET === "boolean" && REACT_APP_IS_TESTNET) || REACT_APP_IS_TESTNET === "true" ? true : false;

export const POLYGON_MARKETPLACE_CONTRACT_ADDRESS = process.env.REACT_APP_POLYGON_SOLLAR_MARKETPLACE_ADDRESS || "";
export const ETHEREUM_MARKETPLACE_CONTRACT_ADDRESS = process.env.REACT_APP_ETHEREUM_SOLLAR_MARKETPLACE_ADDRESS || "";
export const BINANCE_MARKETPLACE_CONTRACT_ADDRESS = process.env.REACT_APP_BINANCE_SOLLAR_MARKETPLACE_ADDRESS || "";


// Website Details (API and Frontend)
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";
export const BASE_URL = process.env.REACT_APP_BASE_URL || "";

//  Smart Contract Details
export const NFT_ABI = nft.abi || [];
export const NFT_BYTECODE = nft.bytecode || "";

export const NFT_MARKET_PLACE_ABI = nftMarketPlace.abi || [];
export const NFT_MARKET_PLACE_BYTECODE = nftMarketPlace.bytecode || "";

// Infura Details
export const INFURA_PROJECT_ID = process.env.REACT_APP_INFURA_PROJECT_ID || "";
export const INFURA_PROJECT_SECRET = process.env.REACT_APP_INFURA_PROJECT_SECRET || "";
export const INFURA_API_ENDPOINT = process.env.REACT_APP_INFURA_API_ENDPOINT || "https://ipfs.infura.io:5001";
export const INFURA_IPFS_BASE_URL = process.env.REACT_APP_INFURA_IPFS_BASE_URL || "";
