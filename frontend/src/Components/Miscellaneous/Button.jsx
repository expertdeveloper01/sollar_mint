import * as React from 'react';
import { styled } from '@mui/material/styles';
import MUIButton from '@mui/material/Button';

const CustomButton = styled(MUIButton)(({ theme }) => ({
    color: theme.palette.getContrastText("#6b9400"),
    backgroundColor: "#6b9400",
    '&:hover': {
        backgroundColor: "#6b9400",
    },
}));

export default function Button({ children, ...props }) {
    return (
        <CustomButton variant="contained" {...props}>{children}</CustomButton>
    );
}