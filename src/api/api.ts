import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) : InternalAxiosRequestConfig => {
    console.log('Starting Request', config);

    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
},
    (error : AxiosError) => {
        console.error('Request Error', error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use((response: AxiosResponse) : AxiosResponse => {
    console.log('Response ', response)
    return response;
},
    (error : AxiosError) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized');
        } else if (error.response && error.response.status === 500) {
            console.error('Server Error');
        }
        return Promise.reject(error);
    }
);

export default api;
