import React from 'react';

import AboutView from '../components/AboutView.jsx';
import AboutMenu from '../components/AboutMenu.jsx';
import About from '../components/About.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {infoViewChanged} from '../../actions/index.js';

// sends store state into AppView as props
function mapStateToProps(state) {
	return {
		currentInfoView: state.currentInfoView
	};
}

// links actions with redux to be available as props in AppView
function mapDispatchToProps(dispatch) {
	return bindActionCreators({infoViewChanged}, dispatch);
}

const InfoViewContainer = (props) => {
	return (
		<div>
			<br/>
			<br/>
			<AboutView>
				<AboutMenu/>
				<About/>
			</AboutView>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoViewContainer);
