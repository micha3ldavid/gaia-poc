
import Types from '../actions/types';

import { put, fork, take, call } from 'redux-saga/effects';
import { request } from '../services/api';

function getApiTypes () {

	const types = [];
	const reg = /_API$/;

	for (var t in Types) {

		if (reg.test(t)) {
			types.push(Types[t]);
		}
	}

	return types;
}

function* worker (action) {

	try {

		const response = yield call(request, action);

		if (response.status === 200) {
			yield put(action.success(response.data));
		}
		else {
			yield put(action.failure(response));
		}

	}
	catch (err) {
		yield put(action.failure(err));
	}
}

function* watcher () {

	const types = getApiTypes();

	while (true) {
		const action = yield take(types);

		if (action) {
			yield fork(worker, action);
		}
	}
}

function* initialize () {
	yield fork(watcher);
}

export { initialize };
