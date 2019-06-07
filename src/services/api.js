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

export const login = async ({ email, password }) => {
    try {
        return api.post('/login', { email, password });
    } catch (e) {
        throw new Error('Wrong identifier');
    }
};

export const signup = async ({ email, password }) => {
    try {
        return api.post('/signup', {
            email, password,
        });
    } catch (e) {
        throw e;
    }
};

export const update = async ({ email }) => {
    try {
        return securedApi.put('/me', {
            email,
        });
    } catch (e) {
        throw e;
    }
};


export const getResetPwdUrl = async ({ email }) => {
    try {
        return api.post('/forgotpassword', {
            email,
        });
    } catch (e) {
        throw e;
    }
};
