
import axios from 'axios';
import config from './api-config';

function request (action) {

	return axios.request({
		url: action.endpoint,
		method: action.method || 'get',
		baseURL: config.baseURL,
		headers: Object.assign({}, config.headers, action.headers)
	});
}

export { request };
