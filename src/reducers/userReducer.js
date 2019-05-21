import {
	LOGOUT,
	LOGIN_SUCCESS
} from '../constants/action-types';

const initialState = {
	isLoggedIn: false,
	user: null,
	token: null,
}

function userReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				user: action.payload,
			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: undefined,
				token: undefined,
			};
		default:
			return state;
	}
};

export default userReducer;