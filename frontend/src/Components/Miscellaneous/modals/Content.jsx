import DialogContent from '@mui/material/DialogContent';
import React from 'react';

const ModalContent = ({ children, ...props }) => {

    return (

        <DialogContent dividers {...props}>
            {children}
        </DialogContent>
    )
}

export default ModalContent;