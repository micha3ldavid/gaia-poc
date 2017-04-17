
import Types from './types';

export const getTerm = () => {
	return {
		type: Types.GET_TERM_API,
		endpoint: 'videos/term/119931',
		method: 'get',
		success: getTermSuccess,
		failure: getTermFailure
	 };
};

export const getTermSuccess = (data) => {
	return {
		type: Types.GET_TERM_SUCCESS,
		data: data
	};
};

export const getTermFailure = () => {
	return {
		types: Types.GET_TERM_FAILURE
	};
};
