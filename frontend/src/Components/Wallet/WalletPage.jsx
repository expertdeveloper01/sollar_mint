import React from 'react'
import { useAccount, useConnect, useDisconnect, useEnsName, useNetwork, useSwitchNetwork } from 'wagmi'
import { Box, Divider, Grid, Modal, Paper, Tooltip, Typography } from '@mui/material'
import { Layout } from '../Layouts'
import { Button } from '@mui/material'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const WalletPage = () => {

    const wallets = {
        walletConnect: {
            image: "icons/walletconnect.png",
            description: "Start exploring blockchain applications in seconds. Trusted by over 1 million user worldwide."
        },
        injected: {
            image: "icons/metamask.webp",
            description: "Let user access your Ethereum app from anywhere. No more browser extensions."
        },
        coinbaseWallet: {
            image: "icons/coinbase.webp",
            description: "Let user access your Ethereum app from anywhere. No more browser extensions."
        }
    }


    const { connector: activeConnector, isConnected, address } = useAccount();
    const { connect, connectors, error, isLoading, pendingConnector, isConnecting } = useConnect();
    console.log("error", error)
    // const { disconnect } = useDisconnect();
    // const { data: ensName } = useEnsName({ address })

    const { chain } = useNetwork();
    const { chains, pendingChainId, switchNetwork } = useSwitchNetwork();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Layout title='Wallets'>
            {
                isConnected ? (
                    <div style={{ textAlign: "center", marginTop: '30px', fontSize: '20px' }} >
                        <div>
                            You are connected with {activeConnector?.name} <br />

                            {/* <div>{ensName ? `${ensName} (${address})` : address}</div>
                            <Button onClick={disconnect} variant="contained" color='success'>Disconected</Button> */}

                        </div>
                        {
                            chain &&
                            <div style={{ padding: '10px', marginLeft: '10px' }}>
                                Connected to <Tooltip title="Switch network">
                                    <Button onClick={handleOpen} variant="contained" color='success' className="wallet_page_btn">
                                        {chain.name}
                                    </Button>
                                </Tooltip>
                            </div>
                        }
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <div className='select_network'>
                                    <Typography>
                                        <h4>Select the Network</h4>
                                    </Typography>
                                    <Typography onClick={handleClose} style={{ cursor: "pointer" }}><CloseIcon /></Typography>
                                </div>
                                <Divider />
                                {chain && <Typography style={{ marginTop: "20px" }}>Connected to {chain.name}</Typography>}
                                {chains.map((element) => (
                                    <Grid spacing={5} padding={1}>
                                        <Button
                                            color='success'
                                            variant="contained"
                                            disabled={!switchNetwork || element.id === chain?.id}
                                            key={element.id}
                                            onClick={() => switchNetwork?.(element.id)}
                                        >
                                            {element.name}
                                            {isLoading && pendingChainId === element.id && ' (switching)'}
                                        </Button>

                                    </Grid>
                                ))}


                            </Box>
                        </Modal>
                    </div>
                ) : (
                    <Box
                        sx={{
                            mx: 5,
                            mt: 5
                        }}
                    >
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                            {connectors.map((connector) => {
                                const wallet = wallets[connector.id];
                                return (
                                    <Grid
                                        key={connector.id}
                                        item
                                        xs={4}
                                    >
                                        <Paper
                                            elevation={12}
                                            sx={{
                                                borderRadius: "10px",
                                                cursor: "pointer"
                                            }}
                                            onClick={() => connect({ connector })}
                                        >
                                            {isConnecting && pendingConnector?.id === connector.id && ' (connecting)'}
                                            <div className="walletList item">
                                                <img
                                                    src={wallet.image}
                                                    alt={connector.name}
                                                    style={{
                                                        borderRadius: "50%"
                                                    }}
                                                />
                                                <h4>{connector.name}</h4>
                                                <p>{wallet.description}</p>
                                                <h5>Most Popular</h5>
                                                {isLoading && pendingConnector?.id === connector.id &&
                                                    <Typography
                                                        variant="h5"
                                                        sx={{
                                                            mt: 4
                                                        }}
                                                    >connecting...</Typography>}
                                                {pendingConnector?.id === connector.id && error && (<div>{error.message}</div>)}

                                            </div>
                                        </Paper>

                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                )
            }

            {/* <div className="col-lg-4 col-md-6 mb30">
                                <div className="walletList item">
                                    <img src="images/metamask.png" alt="" />
                                    <h4>MetaMask</h4>
                                    <p>Start exploring blockchain applications
                                        in seconds. Trusted by over 1 million user worldwide.</p>
                                    <h5>Most Popular</h5>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb30">
                                <div className="walletList item">
                                    <img src="images/walletconnect.png" alt="" />
                                    <h4>WalletConnect</h4>
                                    <p></p>

                                </div>
                            </div> */}
        </Layout >
    )
}

export default WalletPage
