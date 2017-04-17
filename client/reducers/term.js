
import Types from '../actions/types';
import initialState from './initial-state/term';
import { createReducer } from 'reduxsauce';

const getTerm = (state, action) => {
	return Object.assign({}, state, {
		fetching: true,
		error: null
	});
};

const getTermSuccess = (state, action) => {
	return Object.assign({}, state, {
		fetching: false,
		error: null,
		details: action.data
	});
};

const getTermFailure = (state, action) => {
	return Object.assign({}, state, {
		fetching: false,
		error: {
			message: 'Could not load term'
		}
	});
};

export default createReducer(initialState, {
	[Types.GET_TERM_API]: getTerm,
	[Types.GET_TERM_SUCCESS]: getTermSuccess,
	[Types.GET_TERM_FAILURE]: getTermFailure
});
