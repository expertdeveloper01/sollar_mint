import Axios from 'axios'
import { API_BASE_URL } from "./constants";
import { removeLastChar } from "./helper";

const axios = Axios.create({
    baseURL: removeLastChar(API_BASE_URL, "/", "/"),
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

export const csrf = () => axios.get('/sanctum/csrf-cookie');

export default axios
