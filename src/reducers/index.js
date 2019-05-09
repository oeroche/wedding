import { combineReducers } from 'redux';
import baseReducer from './baseReducer';

const globalReducer = combineReducers({
    baseReducer,
});

export default globalReducer;
