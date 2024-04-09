import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useQuery } from 'react-query';
import axios from '../../utils/axios';

export default function Category({ value = "", handleChange }) {

  const { isLoading, isError, data: categories = [], error } = useQuery('categories', {
    queryFn: () => axios.get('/api/categories').then(res => res.data.data)
  });



  return (
    <Autocomplete
      id="categories"
      sx={{ width: "100%" }}
      options={categories}
      loading={isLoading}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => <Box component="li" {...props}>{option.name}</Box>}
      renderInput={(params) => (<TextField 
        {...params}
        val
        label="Choose a category"
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password', // disable autocomplete and autofill
        }}
      />
      )}
      onChange={handleChange}
    
    />
  );
}