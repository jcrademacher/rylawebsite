import React from 'react';
import Greeting from '../components/Greeting.jsx';
import InfoPanel from '../components/InfoPanel.jsx';
import PhotoViewer from '../components/PhotoViewer.jsx';
import pageTheme from '../../styles.js';
import InfoViewContainer from '../containers/InfoViewContainer.jsx';
import Footer from '../components/Footer.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {navTabChanged} from '../../actions/index.js';
import {infoViewChanged} from '../../actions/index.js';

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
}

const ViewHandler = (props) => {
	switch(props.currentTab) {
		case 0: // 0 stands for default homepage
			return (
				<div>
					<Greeting onClick={() => {props.navTabChanged(3); props.infoViewChanged(1)}}/>
					<InfoPanel
						title="Discover who we are and what happens at RYLA"
						buttonLabel="About"
						backgroundColor={pageTheme.secondary}
						textColor="white"
						onClick={() => { props.navTabChanged(3); props.infoViewChanged(0)}}
					/>
					<InfoPanel
						title="For sophomores entering their junior year of high school"
						buttonLabel="Apply Now"
						backgroundColor="white"
						onClick={() => { props.navTabChanged(1) }}
					/>
					<InfoPanel
						title="Hosted at the beautiful BSA Camp Hinds in Raymond, ME"
						buttonLabel="Directions"
						backgroundColor={pageTheme.primary}
						textColor="white"
						onClick={() => { props.navTabChanged(3); props.infoViewChanged(3)}}
					/>
					<Footer/>
				</div>
			);
			break;
		case 2:
			return (
				<PhotoViewer/>
			);
		case 3: case 4: // for both about and contact
			return (
				<InfoViewContainer/>
			);
		default:
			return (
				<div>
					<br/><br/>
					<h1>Not Found</h1>
				</div>
			);
			break;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewHandler);
