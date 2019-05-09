import {
    RESET_STATE,
    UPDATE_STATE,
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
