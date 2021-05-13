import { API_BASE_URL } from '../../config';
import axios from 'axios';

export const userLogin = (payload) => {
    const { username, password } = payload;
    axios.post(`${API_BASE_URL}/auth/login`, {
        userName: username,
        password: password
    })
    .then(res => {
        console.log(res.data?.message);
    })
    .catch(err => {
        console.log(err.response?.data?.message);
    });
};