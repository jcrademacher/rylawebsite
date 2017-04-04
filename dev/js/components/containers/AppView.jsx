import React from 'react';

import AppContainer from './AppContainer.jsx';

import PhotoViewer from '../components/PhotoViewer.jsx';
import Home from '../components/Home.jsx';
import AboutView from '../components/AboutView.jsx';
import LoginView from '../components/LoginView.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';
import Forgot from '../components/Forgot.jsx';
import MyRYLA from '../containers/MyRYLA.jsx';
import Dashboard from '../components/Dashboard.jsx';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { AboutRYLA, Contact, Directions, Principles, FAQ} from '../components/AboutContent.jsx';


import AuthService from '../../utils/AuthService.js';

/*
	AppView Container
	Holds all necessary components for sitepage
*/
/*onChange={props.navTabChanged}*/

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

const auth = new AuthService('pgRvGMvn0pF7S6eWG65boq9g3aWfAnxy', 'jrademacher.auth0.com');

// checks if user is logged in
const requireAuth = (nextState, replace) => {
	if(!auth.loggedIn())
		replace({ pathname: '/login'});
};

const parseAuthHash = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.parseHash(nextState.location.hash)
  }
};

class AppView extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={AppContainer} auth={auth}>
					<IndexRoute component={Home}/>
					<Route path='login' component={LoginView} >
						<IndexRoute component={Login} onEnter={parseAuthHash}/>
						<Route path='register' component={Register}/>
						<Route path='forgot' component={Forgot}/>
					</Route>
					<Route path='gallery' component={PhotoViewer}/>
					<Route path='MyRYLA' component={MyRYLA} onEnter={requireAuth}>
						<IndexRoute component={Dashboard}/>
						<Route path='application' component={() => <h1>Application</h1>}/>
					</Route>
					<Route path='about' component={AboutRYLAWrapper}/>
					<Route path='contact' component={ContactWrapper}/>
					<Route path='directions' component={DirectionsWrapper}/>
					<Route path='principles' component={PrinciplesWrapper}/>
					<Route path='faq' component={FAQWrapper}/>
				</Route>
				<Route path='*' component={() => <h1>404: Not Found</h1>}/>
			</Router>
		);
	}
}

// links AppView with redux
export default AppView;
