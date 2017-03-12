import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

import AppView from './components/containers/AppView.jsx';

import { Router, Route, Link, hashHistory} from 'react-router';

const App = () => {
	return (
		<AppView/>
	);
}

// redux store
const store = createStore(allReducers);

/*
const Home = () => <h1>Home <Link to='/gallery'>Gallery</Link> <Link to='/about'>About</Link></h1>;
const Gallery = () => <h1>Gallery</h1>;
const AboutRYLA = () => <h1>About RYLA</h1>;

ReactDOM.render(
	<div>
		<Router history={hashHistory}>
			<Route path='/' component={Home}/>
			<Route path='/gallery' component={Gallery}/>
			<Route path='/about' component={AboutRYLA}/>
		</Router>
	</div>
	, document.getElementById('app')
);*/

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('app')
);
