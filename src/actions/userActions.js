import {
    SIGNUP,
    LOGIN,
    LOGOUT,
    UPDATE,
    GET_RESET_PWD_URL,
} from '../constants/action-types';

export const signup = user => ({
    type: SIGNUP,
    payload: user,
});

export const login = user => ({
    type: LOGIN,
    payload: user,
});

export const logout = () => ({
    type: LOGOUT,
});

export const update = user => ({
    type: UPDATE,
    payload: user,
});

export const getResetPwdUrl = email => ({
    type: GET_RESET_PWD_URL,
    payload: email,
});
