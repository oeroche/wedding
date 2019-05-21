import {
	DISMISS_ERROR
} from './../constants/action-types';

export const requestAlert = (type, message) => ({
	type: type,
	payload: {
		message,
	}
});

export const dismissError = () => ({
	type: DISMISS_ERROR,
});