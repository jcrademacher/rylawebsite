import React from 'react';

import AppContainer from './AppContainer.jsx';

import PhotoViewer from '../components/PhotoViewer.jsx';
import Home from '../components/Home.jsx';
import AboutView from '../components/AboutView.jsx';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { AboutRYLA, Contact, Directions, Principles, FAQ} from '../components/AboutContent.jsx';

/*
	AppView Container
	Holds all necessary components for sitepage
*/
/*onChange={props.navTabChanged}*/

const MyRYLA = (props) => (
	<div></div>
)

const AppView = (props) => {
	return (
		<Router history={browserHistory}>
			<Route path='/' component={AppContainer}>
				<IndexRoute component={Home}/>
				<Route path='/MyRYLA' component={MyRYLA} />
				<Route path='/gallery' component={PhotoViewer}/>
				<Route path='/about' component={AboutView}>
					<IndexRoute component={AboutRYLA}/>
					<Route path='/about/contact' component={Contact}/>
					<Route path='/about/directions' component={Directions}/>
					<Route path='/about/principles' component={Principles}/>
					<Route path='/about/faq' component={FAQ}/>
				</Route>
			</Route>
		</Router>
	);
}

// links AppView with redux
export default AppView;
