import Greeting from '../components/Greeting.jsx';
import InfoPanel from '../components/InfoPanel.jsx';
import Footer from '../components/Footer.jsx';

import React from 'react';

import { browserHistory } from 'react-router';

import pageTheme from '../../styles.js';

const Home = (props) => (
	<div>
		<Greeting onClick={() => browserHistory.push('/about')}/>
		<InfoPanel
			title="Discover who we are and what happens at RYLA"
			buttonLabel="About"
			backgroundColor={pageTheme.secondary}
			textColor="white"
			onClick={() => browserHistory.push('/about')}
		/>
		<InfoPanel
			title="For sophomores entering their junior year of high school"
			buttonLabel="Apply Now"
			backgroundColor="white"
			onClick={() => browserHistory.push('/about')}
		/>
		<InfoPanel
			title="Hosted at the beautiful BSA Camp Hinds in Raymond, ME"
			buttonLabel="Directions"
			backgroundColor={pageTheme.primary}
			textColor="white"
			onClick={() => browserHistory.push('/about')}
		/>
		<Footer/>
	</div>
);

export default Home;
