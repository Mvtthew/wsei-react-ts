import './scss/index.scss';
import 'bootstrap';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import { createStore } from 'redux';
import rootReducer from './store';

const store = createStore(rootReducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
