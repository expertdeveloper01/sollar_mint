import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import axios, { csrf } from '../../utils/axios'

export const useAuth = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const { data: user, isLoading, mutateAsync, error } = useMutation({
        mutationFn: async () => await axios.get('/api/user')
    });

    const register = async ({ ...props }) => {
        let newErrors = [];
        await csrf().catch(error => newErrors.push(error.message));
        if(!newErrors.length) {
            await axios
                .post('/register', props)
                .then(async () => await mutateAsync())
                .catch(error => {    
                    newErrors.push(error?.response?.data?.errors || error.message)
                })
        }
        setErrors(newErrors)   
    }

    const login = async ({ ...props }) => {
        let newErrors = [];
        await csrf().catch(error => newErrors.push(error.message));
        if(!newErrors.length) {
            await axios
                .post('/login', props)
                .then(async () => await mutateAsync())
                .catch(error => {  
                    newErrors.push(error?.response?.data?.errors || error.message)
                })
        }  
        setErrors(newErrors)      
    }

    const logout = async () => {
        await axios.post('/logout')
            .then(async () => await mutateAsync())
            .catch(error => setErrors([error.message]))

        navigate("/")
    }

    const isUserExist = async (value, type = "address") => {
        return await axios
            .get(`/api/user/${value}/${type}`)
            .then(() => true)
            .catch((error) => {
                console.error(error);
                setErrors([error?.response?.data?.message || error.message])
                return false
            });
    }

    const getSignatureMessage = async () => {
        return await axios.get('/api/get-sign-message')
            .then((res) => res.data)
            .catch((error) => {
                setErrors([error.message]);
                return "";
            });
    }

    const refreshCurrentUser = async () => {
        try {
            await csrf();
            await mutateAsync();
            setErrors([])
        } catch (error) {
            setErrors([error.message])
        }
    }

    const authErrors = typeof errors === "object" && errors.length ? errors : [];

    return {
        user,
        isLoading,
        userError: error,
        errors: authErrors.filter(error => error),
        register,
        login,
        logout,
        isUserExist,
        refreshCurrentUser,
        getSignatureMessage,
    }
}
