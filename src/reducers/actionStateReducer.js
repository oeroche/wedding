import {
	SET_ACTION_STATE,
	CLEAR_ACTION_STATE
} from './../constants/action-types';

const initialState = {
	loginLoading: false,
	signUpLoading: false,
}

export default function actionStateReducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_ACTION_STATE:
			return { ...state, [payload.variable]: payload.value };
		case CLEAR_ACTION_STATE:
			const newState = { ...state }
			delete newState[payload.variable]
			return newState;
		default:
			return state;
	}
}