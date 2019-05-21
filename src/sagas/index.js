import { takeLatest, call, put } from 'redux-saga/effects';
import { signUp, login } from '../services/api';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest('LOGIN', loginProcess);
    yield takeLatest('SIGNUP', signUpProcess);
}

// function that makes the api request and returns a Promise for response
// function fetch() {
//     return axios({
//         method: 'get',
//         url: 'https://dog.ceo/api/breeds/image/random',
//     });
// }

function* loginProcess(action) {
    try {
        yield put({ type: 'SET_ACTION_STATE', payload: { variable: 'loginLoading', value: true } });

        // Simulate API call
        yield new Promise(resolve => setTimeout(resolve, 3000))

        const result = yield call(login, action.payload);

        yield put({ type: 'LOGIN_SUCCESS', payload: result });
    } catch (error) {
        yield put({ type: 'ERROR', payload: error });
    } finally {
        yield put({ type: 'CLEAR_ACTION_STATE', payload: { variable: 'loginLoading' } });
    }
}

function* signUpProcess(action) {
    try {
        yield put({ type: 'SET_ACTION_STATE', payload: { variable: 'signUpLoading', value: true } });

        // Simulate API call
        yield new Promise(resolve => setTimeout(resolve, 2000))

        const result = yield call(signUp, action.payload);

        yield put({ type: 'LOGIN_SUCCESS', payload: result });

    } catch (error) {
        yield put({ type: 'ERROR', payload: error });
    } finally {
        yield put({ type: 'CLEAR_ACTION_STATE', payload: { variable: 'signUpLoading' } });
    }
}
