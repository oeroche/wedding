import { combineReducers } from 'redux';
import baseReducer from './baseReducer';
import sagaReducer from './sagaReducer';

const globalReducer = combineReducers({
    baseReducer,
    sagaReducer,
});

export default globalReducer;
