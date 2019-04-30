import * as api from '../services/api';

export const signup = async (email, password) => {
    try {
        const result = await api.signup(email, password);
        if (result) {
            if (localStorage) localStorage.setItem('token', result.token);
        }
        return result;
    } catch (e) {
        throw e;
    }
};

export const login = async (identifier, password) => {
    try {
        const result = await api.login(identifier, password);
        if (result) {
            if (localStorage) localStorage.setItem('token', result.token);
        }
        return result;
    } catch (e) {
        throw e;
    }
};

export const isLoggedIn = () => (typeof window !== 'undefined' ? !!localStorage.getItem('token') : false);

export const Logout = () => {
    if (localStorage) localStorage.clear();
};
