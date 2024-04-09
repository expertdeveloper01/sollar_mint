import { Connector } from "wagmi";
import { goerli, mainnet, polygon, polygonMumbai, bsc, bscTestnet } from "wagmi/chains";
import { BINANCE_MARKETPLACE_CONTRACT_ADDRESS, DEFAULT_NETWORK_CHAIN, ETHEREUM_MARKETPLACE_CONTRACT_ADDRESS, IS_TESTNET, NFT_ABI, NFT_BYTECODE, NFT_MARKET_PLACE_ABI, NFT_MARKET_PLACE_BYTECODE, POLYGON_MARKETPLACE_CONTRACT_ADDRESS } from "../../utils/constants";
import { chains } from "../../utils/wagmi";

export class Web3 extends Connector {

    networks = {
        testnet: {
            ethereum: goerli,
            polygon: polygonMumbai,
            binance: bscTestnet
        },
        mainnet: {
            ethereum: mainnet,
            polygon: polygon,
            binance: bsc
        }
    }

    chain = null;

    defaultNetwork = DEFAULT_NETWORK_CHAIN.trim();

    testnet = IS_TESTNET;

    nft = {
        abi: NFT_ABI,
        byteCode: NFT_BYTECODE
    };

    marketplace = {
        abi: NFT_MARKET_PLACE_ABI,
        byteCode: NFT_MARKET_PLACE_BYTECODE,
        address: ""
    }

    constructor(currentChain = {}) {
        super({ chains });
        this.chain = typeof currentChain === "object" && Object.keys(currentChain).length ? currentChain : null;

        // set marketplace contract address
        this.setMarketplaceAddress(this.chain);
    }

    getUserChain = () => {
        if(this.chain) return this.chain;
        return this.chains.find(chain => chain.network === this.defaultNetwork) || null;
    }

    setMarketplaceAddress = (selectedChain = {}) => {
        selectedChain = selectedChain && Object.keys(selectedChain).length ? selectedChain : this.getUserChain();
        let networks = this.testnet ? this.networks.testnet : this.networks.mainnet;

        if(networks.ethereum.id === selectedChain.id) {
            this.marketplace.address = ETHEREUM_MARKETPLACE_CONTRACT_ADDRESS;
        } else if(networks.polygon.id === selectedChain.id) {
            this.marketplace.address = POLYGON_MARKETPLACE_CONTRACT_ADDRESS;
        } else if(networks.binance.id === selectedChain.id) {
            this.marketplace.address = BINANCE_MARKETPLACE_CONTRACT_ADDRESS;
        } else {
            throw new Error('Invalid blockchain network!');
        }
    }
}