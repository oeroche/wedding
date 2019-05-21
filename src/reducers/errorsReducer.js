import {
    ERROR,
    WARNING,
    SUCCESS,
    DISMISS_ERROR,
} from '../constants/action-types';

const initialState = {
    list: []
};

const errorsReducer = (state = initialState, action) => {
    const { list } = state;
    switch (action.type) {
        case ERROR:
            list.unshift({
                type: ERROR,
                message: action.payload.message,
            });
            return { ...state, list };
        case WARNING:
            list.unshift({
                type: WARNING,
                message: action.payload.message,
            });
            return { ...state, list };
        case SUCCESS:
            list.unshift({
                type: SUCCESS,
                message: action.payload.message,
            });
            return { ...state, list };
        case DISMISS_ERROR:
            list.splice(0, 1);
            return { ...state, list };
        default:
            return state;
    }
};

export default errorsReducer;
