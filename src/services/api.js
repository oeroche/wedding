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
    if (email === 'test@test.com' && password === 'test') {
        const result = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com'
        }
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIn0.HAPndkUNwmLLFIWEU6OV93H8LXDKz9ApaKdBHTkhmNA';
        return result;
    } else {
        throw new Error('Wrong identifier');
    }
};

export const signUp = async (user) => {
    const result = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }
    // try {
    //     const result = await api.post('/signUp', { firstName, lastName, password, email });
    //     return result;
    // } catch (e) {
    //     throw e;
    // }
    // throw new Error('Fuck you');


    return result;
};
