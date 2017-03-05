import React from 'react';
import Navigation from '../components/Navigation.jsx';
import ViewHandler from '../components/ViewHandler.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {navTabChanged} from '../../actions/index.js';
import {infoViewChanged} from '../../actions/index.js';

// sends store state into AppView as props
function mapStateToProps(state) {
	return {
		currentTab: state.currentTab
	};
}

// links actions with redux to be available as props in AppView
function mapDispatchToProps(dispatch) {
	return bindActionCreators({navTabChanged, infoViewChanged}, dispatch);
}

/*
	AppView Container
	Holds all necessary components for sitepage
*/
/*onChange={props.navTabChanged}*/
const AppView = (props) => {
	return (
		<div>
			<Navigation
				navTabChanged={props.navTabChanged}
				currentTab={props.currentTab}
			/>
			<ViewHandler currentTab={props.currentTab}/>
		</div>
	);
}

// links AppView with redux
export default connect(mapStateToProps, mapDispatchToProps)(AppView);
