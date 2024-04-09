import { createContext, useContext, useState, useEffect } from 'react';
import { Web3Modal } from '@web3modal/react';
import { WagmiConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AuthProvider } from './Auth';
import { web3EthereumClient, wagmiClient, WALLET_CONNECT_PROJECT_ID as PROJECT_ID } from '../utils';
import { useIsClient } from 'usehooks-ts';

// const defaultWallets = [
//     "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // Metamask
//     "185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a", // Atomic
//     "afbd95522f4041c71dd4f1a065f971fd32372865b416f95a0b1db759ae33f2a7", // omini
//     "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26", // Math wallet
//     "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927", // Ledger Live
//     "71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d", // Authereum
//     "3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50", // Torus
//     "802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f", // Infinity wallet
//     "9d6c614d1995741d5313f1f3dbf1f66dcba694de782087d13b8721822502692f", // Stasis
//     "a0e4da8b263efda0a304ad250f2bdb877342d6df61717805687c5c6ca5909c64", // Hyper pay
//     ""
// ];

// Create a client
const queryClient = new QueryClient()

export const SollarMintContext = createContext();

export const SollarMintProvider = ({ children, defaultValue = {} }) => {
    const isClient = useIsClient();
    let { web3ModalProps = {}, ...others } = defaultValue;

    web3ModalProps = {
        ...web3ModalProps,
        themeMode: web3ModalProps?.themeMode || "light",
        themeColor: web3ModalProps?.themeColor || "green",
        themeBackground: web3ModalProps?.themeBackground || "gradient",
        themeZIndex: web3ModalProps?.themeZIndex || 99999,
        projectId: web3ModalProps?.projectId || PROJECT_ID,
        ethereumClient: web3ModalProps?.ethereumClient || web3EthereumClient,
        // defaultChain: web3ModalProps?.defaultChain || defaultChain,
        // explorerAllowList: web3ModalProps?.explorerAllowList || defaultWallets
    }
    console.log(isClient, "soll")

    return (
        <SollarMintContext.Provider
            value={{
                ...others,
                web3ModalProps
            }}
        >
            {
                isClient ? (
                    <>
                        <WagmiConfig client={wagmiClient}>
                            <QueryClientProvider client={queryClient}>
                                <AuthProvider >
                                    {children}
                                </AuthProvider>
                                <ReactQueryDevtools initialIsOpen={false} />
                            </QueryClientProvider>
                        </WagmiConfig>
                        <Web3Modal {...web3ModalProps} />
                    </>
                ) : null
            }
        </SollarMintContext.Provider >
    );
};

export const useSollarMint = () => {
    return useContext(SollarMintContext);
};