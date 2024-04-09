import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function ModalTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2, fontWeight: '700 !important' }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export default function Modal({
    open = false,
    handleClose,
    title,
    children,
    actions,
    titleProps = {
        titleClassName: "",
    },
    actionProps = {},
    ...props
}) {

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            {...props}
        >
            <ModalTitle {...titleProps} onClose={handleClose}>{title}</ModalTitle>
            <DialogContent dividers>{children}</DialogContent>
            {/* <DialogActions {...actionProps}>
                {actions ? actions : (<Button autoFocus onClick={handleClose}>Close</Button>)}
            </DialogActions> */}
        </BootstrapDialog>
    );
}