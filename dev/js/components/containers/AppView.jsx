



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

const AboutRYLAWrapper = (props) => (
	<AboutView path={props.location.pathname}>
		<AboutRYLA/>
	</AboutView>
);

const ContactWrapper = (props) => (
	<AboutView path={props.location.pathname}>
		<Contact/>
	</AboutView>
);

const DirectionsWrapper = (props) => (
	<AboutView path={props.location.pathname}>
		<Directions/>
	</AboutView>
);

const PrinciplesWrapper = (props) => (
	<AboutView path={props.location.pathname}>
		<Principles/>
	</AboutView>
);

const FAQWrapper = (props) => (
	<AboutView path={props.location.pathname}>
		<FAQ/>
	</AboutView>
);

const AppView = (props) => {
	return (
		<Router history={browserHistory}>
			<Route path='/' component={AppContainer}>
				<IndexRoute component={Home}/>
				<Route path='MyRYLA' component={MyRYLA} />
				<Route path='gallery' component={PhotoViewer}/>
				<Route path='about' component={AboutRYLAWrapper}/>
				<Route path='contact' component={ContactWrapper}/>
				<Route path='directions' component={DirectionsWrapper}/>
				<Route path='principles' component={PrinciplesWrapper}/>
				<Route path='faq' component={FAQWrapper}/>
			</Route>
		</Router>
	);
}

// links AppView with redux
export default AppView;
