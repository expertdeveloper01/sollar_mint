import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '6b9400',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '6b9400',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'dddddd',
        },
        '&:hover fieldset': {
            borderColor: 'dddddd',
        },
        '&.Mui-focused fieldset': {
            borderColor: '6b9400',
        },
    },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#6b9400' : '#6b9400',
        border: '1px solid #6b9400',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderColor: "#6b9400",
        borderLeftWidth: 3,
        padding: '4px !important', // override inline-style
    },
    borderColor: "#dddddd"
});

export default function Input({
    variant = "validation",
    label = "",
    id = "",
    value = "",
    ...props
}) {
    return (
        <>
            {
                variant === "standard" ? (
                    <FormControl variant="standard" sx={{width: "100%"}}>
                        <InputLabel shrink htmlFor={id}>{label}</InputLabel>
                        <BootstrapInput value={value} id={id} {...props} />
                    </FormControl>
                ) : variant === "custom" ? (
                    <CssTextField label={label} value={value} id={id} {...props} />
                ) : (
                    <ValidationTextField
                        label={label}
                        variant="outlined"
                        value={value}
                        id={id}
                        sx={{ width: "100%"}}
                        {...props}
                    />
                )
            }
        </>
    );
}