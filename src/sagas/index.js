import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import firebase from 'firebase';
import {
    signup, login, update, getResetPwdUrl,
} from '../services/api';
import {
    SIGNUP, LOGIN, LOGOUT, UPDATE, GET_RESET_PWD_URL, UPDATE_SUCCESS, LOGIN_SUCCESS, SET_ACTION_STATE, CLEAR_ACTION_STATE, ERROR,
} from '../constants/action-types';

// function that makes the api request and returns a Promise for response
// function fetch() {
//     return axios({
//         method: 'get',
//         url: 'https://dog.ceo/api/breeds/image/random',
//     });
// }

function* loginProcess(action) {
    try {
        yield put({ type: SET_ACTION_STATE, payload: { variable: 'loginLoading', value: true } });
        // const result = yield login(action.payload);
        const result = yield firebase
            .firestore()
            .collection('faire-parts')
            .where('code', '==', action.payload.code)
            .get();
        localStorage.setItem('code', action.payload.code);
        yield put({ type: LOGIN_SUCCESS, payload: result.docs[0].data() });
    } catch (error) {
        yield put({ type: ERROR, payload: error });
    } finally {
        yield put({ type: CLEAR_ACTION_STATE, payload: { variable: 'loginLoading' } });
    }
}

function* signupProcess(action) {
    try {
        yield put({ type: SET_ACTION_STATE, payload: { variable: 'signupLoading', value: true } });
        const result = yield signup(action.payload);
        localStorage.setItem('token', result.data.token);
        yield put({ type: LOGIN_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: ERROR, payload: error });
    } finally {
        yield put({ type: CLEAR_ACTION_STATE, payload: { variable: 'signupLoading' } });
    }
}

function* updateProcess(action) {
    try {
        yield put({ type: SET_ACTION_STATE, payload: { variable: 'signupLoading', value: true } });
        const result = yield update(action.payload);
        yield put({ type: UPDATE_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: ERROR, payload: error });
    } finally {
        yield put({ type: CLEAR_ACTION_STATE, payload: { variable: 'signupLoading' } });
    }
}

function* resetPwdProcess(action) {
    try {
        yield put({ type: SET_ACTION_STATE, payload: { variable: 'signupLoading', value: true } });
        yield getResetPwdUrl(action.payload);
        // redirect to /signup
    } catch (error) {
        yield put({ type: ERROR, payload: error });
    } finally {
        yield put({ type: CLEAR_ACTION_STATE, payload: { variable: 'signupLoading' } });
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest(LOGIN, loginProcess);
    yield takeLatest(SIGNUP, signupProcess);
    yield takeLatest(UPDATE, updateProcess);
    yield takeLatest(GET_RESET_PWD_URL, resetPwdProcess);
}
