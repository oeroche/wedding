import Axios from 'axios';
import { apiConfig } from '../config';

export const api = Axios.create({
    baseURL: apiConfig.backendUrl,
});

export const securedApi = Axios.create({
    baseURL: apiConfig.backendUrl,
});

securedApi.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        const newConfig = config;
        if (localStorage) newConfig.headers.Authorization = localStorage.getItem('token');
        return config;
    },
    error => Promise.reject(error),
);

securedApi.interceptors.response.use(
    response => response,
    (error) => {
        if (error.response && error.response.status === '401') {
            if (localStorage) localStorage.removeItem('token');
        } // TODO: need to trigger a redux action here to invalidate user
        return Promise.reject(error);
    },
);

export const login = async ({ identifier, password }) => {
    const result = await api.post('/login', { identifier, password });
    return result;
};

export const signup = async ({ username, password, email }) => {
    try {
        const result = await api.post('/signup', { username, password, email });
        return result;
    } catch (e) {
        throw e;
    }
};
