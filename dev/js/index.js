import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

import AppView from '../../dev/js/components/containers/AppView.jsx';

const App = () => {
	return (
		<AppView/>
	);
}

// redux store
const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('app')
);
