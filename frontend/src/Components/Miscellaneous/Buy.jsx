import React from 'react'
import Modal from './Modal';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Buy({ useOpen }) {

    const [open, setOpen] = useOpen();
    const handleClose = () => setOpen(false);

    return (
        <Modal
            title="Checkout"
            open={open}
            handleClose={handleClose}
        // fullWidth={true}
        // maxWidth="sm"
        >
            <Box sx={{ width: "400px" }}>
                <Typography variant='div' sx={{ mt: 1 }}>
                    <div className="modal-body">
                        <div className="p-3 form-border">
                            You are about to purchase a <b>Cig Swaag</b> from <b>Monica Lucas</b>
                            <div className="spacer-single"></div>
                            <h6>Enter quantity. <span className="id-color-2">10 available</span></h6>
                            <input type="text" name="buy_now_qty" id="buy_now_qty" className="form-control" value="1" />
                            <div className="spacer-single"></div>
                            <div className="de-flex">
                                <div>Your balance</div>
                                <div><b>10.67856 ETH</b></div>
                            </div>
                            <div className="de-flex">
                                <div>Service fee 2.5%</div>
                                <div><b>0.00325 ETH</b></div>
                            </div>
                            <div className="de-flex">
                                <div>You will pay</div>
                                <div><b>0.013325 ETH</b></div>
                            </div>

                            <div className="spacer-single"></div>
                            <a href="#" target="_blank" className="btn-main btn-fullwidth">Add funds</a>
                        </div>
                    </div>
                </Typography>
            </Box>
        </Modal>
    )
}
