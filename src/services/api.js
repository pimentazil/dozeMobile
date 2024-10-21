import axios from 'axios';

const api = axios.create({
    baseURL: 'https://192.168.0.227:7013/'
});

export default api;
