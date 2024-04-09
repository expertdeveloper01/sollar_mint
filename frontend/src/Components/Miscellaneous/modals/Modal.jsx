import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import React from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const CustomModal = ({ children, ...props }) => {
    return (
        <BootstrapDialog open={false} {...{
            ...props,
            className: `sollarmint-modal${props.className ? " " + props.className : ""}`
        }}>
            {children}
        </BootstrapDialog>
    )
}

export default CustomModal;