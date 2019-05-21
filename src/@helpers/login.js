import * as api from '../services/api';
import { store } from '../store';

export const signUp = async (email, password) => {
    try {
        const result = await api.signUp(email, password);
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

export const isLoggedIn = () => (store.getState().userReducer.isLoggedIn);

export const Logout = () => {
    if (localStorage) localStorage.clear();
};
