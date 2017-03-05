import React from 'react';

import AboutView from '../components/AboutView.jsx';
import AboutMenu from '../components/AboutMenu.jsx';
import About from '../components/About.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {infoViewChanged} from '../../actions/index.js';
import {navTabChanged} from '../../actions/index.js';

// sends store state into AppView as props
function mapStateToProps(state) {
	return {
		currentInfoView: state.currentInfoView
	};
}

// links actions with redux to be available as props in AppView
function mapDispatchToProps(dispatch) {
	return bindActionCreators({navTabChanged, infoViewChanged}, dispatch);
}

const InfoViewContainer = (props) => {
	return (
		<div>
			<AboutView>
				<AboutMenu
					infoViewChanged={props.infoViewChanged}
					navTabChanged={props.navTabChanged}
				/>
				<About
					currentInfoView={props.currentInfoView}
				/>
			</AboutView>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoViewContainer);
