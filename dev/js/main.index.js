import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

import AppView from './components/containers/AppView.jsx';

import { Router, Route, Link, hashHistory} from 'react-router';

const App = () => {
	return (
		<div style={{fontFamily: 'Muli'}}>
			<AppView/>
		</div>
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
