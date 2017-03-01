import React from 'react';
import Greeting from './Greeting.jsx';
import InfoPanel from './InfoPanel.jsx';
import Footer from './Footer.jsx';
import PhotoViewer from './PhotoViewer.jsx';
import pageTheme from '../../styles.js';

const ViewHandler = (props) => {
	switch(props.currentTab) {
		case 0: // 0 stands for default homepage
			return (
				<div>
					<Greeting/>
					<InfoPanel
						title="Find out what we do and the principles of Rotary"
						buttonLabel="About"
						backgroundColor={pageTheme.secondary}
						textColor="white"
					/>
					<InfoPanel
						title="For sophomores entering their junior year of high school"
						buttonLabel="Apply Now"
						backgroundColor="white"
					/>
					<InfoPanel
						title="Hosted at the beautiful BSA Camp Hinds in Raymond, ME"
						buttonLabel="Directions"
						backgroundColor={pageTheme.primary}
						textColor="white"
					/>
					<Footer/>
				</div>
			);
			break;
		case 2:
			return (
				<PhotoViewer/>
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

export default ViewHandler;
