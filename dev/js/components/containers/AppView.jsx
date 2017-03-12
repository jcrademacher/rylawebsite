import React from 'react';

import AppContainer from './AppContainer.jsx';

import PhotoViewer from '../components/PhotoViewer.jsx';
import InfoViewContainer from '../containers/InfoViewContainer.jsx';
import Home from '../components/Home.jsx';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

/*
	AppView Container
	Holds all necessary components for sitepage
*/
/*onChange={props.navTabChanged}*/
const AppView = (props) => {
	return (
		<Router history={browserHistory}>
			<Route path='/' component={AppContainer}>
				<IndexRoute component={Home}/>
				{/*<Route path='/MyRYLA' component={MyRYLA} />*/}
				<Route path='/gallery' component={PhotoViewer}/>
				<Route path='/about' component={InfoViewContainer}/>
			</Route>
			{/*<ViewHandler/>*/}
		</Router>
	);
}

// links AppView with redux
export default AppView;
