import { useWeb3Modal, useWeb3ModalNetwork } from '@web3modal/react';
import { createContext, useContext, useState, useEffect } from 'react';
import { useAccount, useDisconnect, useSignMessage } from 'wagmi';
import { useAuth as useAuthentication } from '../app/hook';
import RegisterPopup from '../Components/RegisterPopup';

export const AuthContext = createContext();

export const AuthProvider = ({ children, defaultValue = {} }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fromLogin, setFromLogin] = useState(false);
    const [errors, setErrors] = useState([]);
    const [registerPopupOpen, setRegisterPopupOpen] = useState(false);
    const { selectedChain } = useWeb3ModalNetwork();
    const { 
        login, register, logout, isUserExist, user, error, errors: userErrors,
        refreshCurrentUser, getSignatureMessage, isLoading: userLoading 
    } = useAuthentication();
    const { signMessageAsync } = useSignMessage()
    const { disconnect } = useDisconnect()
    const { open } = useWeb3Modal();
    const { address, connector, status } = useAccount({
        async onDisconnect() {
            await logout();
        }
    })

    // route = "Account" | "ConnectWallet" | "Help" | "SelectNetwork";
    const walletConnectOption = (route = "ConnectWallet") => {
        route = route.trim() ? route : "ConnectWallet";
        open({ route });
    }

    const connectWallet = async () => {
        setFromLogin(true);
        if (!address && status !== "connected") {
            if (user) await logout();
            walletConnectOption();
        }
        setIsLoading(false);
    }



    const signUp = async (data = {}) => {
        try {
            setIsLoading(true);
            const message = await getSignatureMessage();
            const signer = await signMessageAsync({
                message
            });
            const signupConnector = {
                id: connector.id,
                name: connector.name,
                chain: {
                    id: selectedChain.id,
                    name: selectedChain.name,
                    network: selectedChain.network
                }
            }
            await register({
                address,
                signer,
                connector: signupConnector,
                ...data
            });
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        let start = true;
        (async () => {
            try {
                if(start) {
                    if (address && status === "connected") {
                        setIsLoading(true);
                        if (fromLogin && !user) {
                            const is_user_exist = await isUserExist(address);
                            if (is_user_exist) {
                                const message = await getSignatureMessage();
                                if (message) {
                                    const loginConnector = {
                                        id: connector.id,
                                        name: connector.name,
                                        chain: {
                                            id: selectedChain.id,
                                            name: selectedChain.name,
                                            network: selectedChain.network
                                        }
                                    }
                                    const signer = await signMessageAsync({
                                        message
                                    });
                                    await login({
                                        address,
                                        connector: loginConnector,
                                        signer,
                                        remember: true
                                    });
                                }
                            } else {
                                setRegisterPopupOpen(true);
                                setIsLoading(false);
                            }
                            setFromLogin(false);
                        } else {
                            if(!user) await refreshCurrentUser();
                        }
                    }
                }
            } catch (error) {
                console.error(error)
                disconnect();
            }
            setIsLoading(false);
        })();

        return () => {
            start = false;
        }
    }, [status, address, user, fromLogin]);

    return (
        <AuthContext.Provider
            value={{
                ...defaultValue,
                address,
                user,
                isLoading: isLoading ? true : userLoading || false,
                connector,
                status,
                disconnect,
                connect: connectWallet,
                register: signUp,
                logout,
                walletConnectOption,
                useErrors: () => [errors, setErrors],
            }}
        >
            {children}
            <RegisterPopup useOpen={() => [registerPopupOpen, setRegisterPopupOpen]} />
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};