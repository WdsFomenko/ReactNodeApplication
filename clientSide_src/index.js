import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory, Router} from 'react-router';

import routes from './routes';

import configureStore from './store/configureStore';

const store = configureStore();

const component = (
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes(store)}
		</Router>
	</Provider>
);

ReactDOM.render(component, document.getElementById('root'));