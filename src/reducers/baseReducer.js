import {
    RESET_STATE,
    UPDATE_STATE,
} from '../constants/action-types';

const initialState = {
    test: 'Me state !',
};

function baseReducer(state = initialState, action) {
    switch (action.type) {
    case RESET_STATE:
        return initialState;
    case UPDATE_STATE:
        return {
            ...state,
            test: action.payload.text,
        };
    default:
        return state;
    }
}

export default baseReducer;
