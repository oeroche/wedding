import { combineReducers } from 'redux';
import baseReducer from './baseReducer';
import sagaReducer from './sagaReducer';
import errorsReducer from './errorsReducer';

const globalReducer = combineReducers({
    baseReducer,
    sagaReducer,
    errorsReducer,
});

export default globalReducer;
