import {
	SIGNUP,
	LOGIN,
	LOGOUT
} from './../constants/action-types';

export const signUp = (user) => ({
	type: SIGNUP,
	payload: user
})

export const login = (user) => ({
	type: LOGIN,
	payload: user,
});

export const logout = () => ({
	type: LOGOUT,
});