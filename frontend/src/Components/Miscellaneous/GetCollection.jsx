import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useQuery } from 'react-query';
import axios from '../../utils/axios';

export default function GetCollection({ value = "", handleChange }) {

    const { isLoading, isError, data, error } = useQuery('collections', {
        queryFn: () => axios.get('/api/collections').then(res => res.data.data)
    });

    const collections = [{
        id: "ss34355fdgdfg",
        name: "testcollection"
    }]

    return (
        <Autocomplete
            id="collections"
            sx={{ width: "100%" }}
            options={collections}
            loading={isLoading}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => <Box component="li" {...props}>{option.name}</Box>}
            renderInput={(params) => (<TextField
                {...params}
                val
                inputProps={{
                    ...params.inputProps,
                    className: "collection_select",
                    autoComplete: 'new-password', // disable autocomplete and autofill
                }}
            />
            )}
            onChange={handleChange}

        />
    );
}