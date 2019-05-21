import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import actionStateReducer from './actionStateReducer';
import userReducer from './userReducer';

const globalReducer = combineReducers({
    errorsReducer,
    actionStateReducer,
    userReducer,
});

export default globalReducer;
