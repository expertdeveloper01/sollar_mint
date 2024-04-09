import * as React from 'react';
import { Formik } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import Button from './Miscellaneous/Button';

import { useAuth } from '../context/Auth';
import { useEffect } from 'react';

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

export default function RegisterPopup({ useOpen }) {
    const [open, setOpen] = useOpen();
    const handleClose = () => setOpen(false);
    const { user, register } = useAuth();

    useEffect(() => {
        let status = true;
        if (user && status) {
            setOpen(false);
        }
        return () => {
            status = false;
        }
    }, [user]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Profile Details
                </Typography>
                <Typography variant='div' sx={{ mt: 2 }}>
                    <Formik
                        initialValues={{ name: '', email: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.name.trim()) {
                                errors.name = "Name is required!";
                            } else if (!values.email) {
                                errors.email = 'Email is required!';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address!';
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            await register(values);
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-name"
                                        startAdornment={<InputAdornment position="start"><PersonIcon /></InputAdornment>}
                                        label="Name"
                                        name='name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <FormHelperText error={true}>{errors.name && touched.name && errors.name}</FormHelperText>
                                </FormControl>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                    <OutlinedInput
                                        type='email'
                                        id="outlined-adornment-email"
                                        startAdornment={<InputAdornment position="start"><AlternateEmailIcon /></InputAdornment>}
                                        label="Email"
                                        name='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <FormHelperText error={true}>{errors.email && touched.email && errors.email}</FormHelperText>
                                </FormControl>
                                <Button type="submit" disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Typography>
            </Box >
        </Modal >
    );
}