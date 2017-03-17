import React from 'react';

import Navigation from '../components/Navigation.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {navTabChanged} from '../../actions/index.js';
import {infoViewChanged} from '../../actions/index.js';

/*
// sends store state into AppView as props
function mapStateToProps(state) {
	return {
		currentTab: state.currentTab,
		currentInfoView: state.currentInfoView
	};
}

// links actions with redux to be available as props in AppView
function mapDispatchToProps(dispatch) {
	return bindActionCreators({navTabChanged, infoViewChanged}, dispatch);
}*/

class AppContainer extends React.Component {
	render() {
		return (
			<div>
				<Navigation path={this.props.location.pathname}/>
				{React.cloneElement(this.props.children, { auth: this.props.route.auth })}
			</div>
		);
	}
}

//export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppContainer;
