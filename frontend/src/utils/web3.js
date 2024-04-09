import { EthereumClient } from "@web3modal/ethereum";

import wagmiClient, { chains } from "./wagmi";

// Web3Modal Ethereum Client
const web3EthereumClient = new EthereumClient(wagmiClient, chains);

export default web3EthereumClient;
