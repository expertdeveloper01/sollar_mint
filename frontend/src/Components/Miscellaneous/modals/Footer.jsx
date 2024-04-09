import DialogActions from '@mui/material/DialogActions';
import React from 'react';

const ModalFooter = ({ children, ...props }) => {

    return (

        <DialogActions {...props}>
            { children }
        </DialogActions>
    )
}

export default ModalFooter;