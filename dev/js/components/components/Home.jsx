import Greeting from '../components/Greeting.jsx';
import InfoPanel from '../components/InfoPanel.jsx';
import Footer from '../components/Footer.jsx';

import React from 'react';

import pageTheme from '../../styles.js';

const Home = (props) => (
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

export default Home;
