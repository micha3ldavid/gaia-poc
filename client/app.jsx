
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import Layout from './views/layout';
import TermView from './views/term';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { initialize } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const enhancer = compose(middleware);

const store = createStore(reducers, {}, compose(enhancer));
const root = document.getElementById('entry');

sagaMiddleware.run(initialize);

ReactDOM.render(
	<Provider store={store}>
		<Layout>
			<TermView />
		</Layout>
	</Provider>,
	root
);
