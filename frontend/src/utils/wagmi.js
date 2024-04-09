import { modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
import { configureChains, createClient } from "wagmi";
import { goerli, /*mainnet, polygon,*/ polygonMumbai, /*bsc,*/ bscTestnet } from "wagmi/chains";
import { WALLET_CONNECT_PROJECT_ID } from "./constants";

export const chains = [/*mainnet,*/ goerli, /*polygon,*/ polygonMumbai, /*bsc,*/ bscTestnet];

// Wagmi client
const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: WALLET_CONNECT_PROJECT_ID }),
]);

const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: "Sollar Mint Marketplace", chains }),
    provider,
});

export default wagmiClient;