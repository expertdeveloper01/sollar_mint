import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material'
import React from 'react'
import { PrivateLayout } from '../Layouts'


const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    height: '250px',
    width: "420px",
    borderRadius: '15px',
}));



export default function Chains() {

    return (
        <PrivateLayout>
            <div style={{ padding: "30px" }}>
                <h1>Choose Blockchain</h1>
                <p style={{ fontSize: '20px' }}>Choose the most suitable blockchain for your needs.<br />
                    You need to connect wallet for creation.</p>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Link to={{ pathname: '/items-create', search: 'goerli' }}>
                            <Item>
                                <div className="walletchain item">
                                    <img
                                        src="icons/etherum.svg"
                                        alt="wallet"
                                        style={{
                                            borderRadius: "50%"
                                        }}
                                    />
                                    <h4>Ethereum</h4>

                                </div>
                            </Item>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to={{ pathname: '/items-create', search: 'bsc-testnet' }}>
                            <Item>
                                <div className="walletchain item">
                                    <img
                                        src="icons/solana.svg"
                                        alt="wallet"
                                        style={{
                                            borderRadius: "50%"
                                        }}
                                    />
                                    <h4>Solana</h4>

                                </div>
                            </Item>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to={{ pathname: '/items-create', search: 'maticmum' }}>
                            <Item>
                                <div className="walletchain item">
                                    <img
                                        src="icons/polygon.svg"
                                        alt="wallet"
                                        style={{
                                            borderRadius: "50%"
                                        }}
                                    />
                                    <h4>Polygon</h4>
                                </div>
                            </Item>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </PrivateLayout>
    )
}
