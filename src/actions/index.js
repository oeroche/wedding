import {
    RESET_STATE,
    UPDATE_STATE,
    API_CALL_REQUEST,
    DISMISS_ERROR,
} from '../constants/action-types';

export const resetState = () => ({
    type: RESET_STATE,
});

export const updateState = text => ({
    type: UPDATE_STATE,
    payload: {
        text,
    },
});

export const onRequestDog = () => ({
    type: API_CALL_REQUEST,
});

export const requestAlert = (type, message) => ({
    type: type,
    message,
});

export const dismissError = () => ({
    type: DISMISS_ERROR,
});
