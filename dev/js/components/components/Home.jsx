import Greeting from '../components/Greeting.jsx';
import InfoPanel from '../components/InfoPanel.jsx';
import Footer from '../components/Footer.jsx';

import React from 'react';

import { browserHistory } from 'react-router';

import pageTheme from '../../styles.js';

const Home = (props) => (
	<div>
		<Greeting onClick={() => {props.router.push('/principles')}}/>
		<InfoPanel
			title="Discover who we are and what happens at RYLA"
			buttonLabel="About"
			backgroundColor={pageTheme.secondary}
			textColor="white"
			onClick={() => props.router.push('/about')}
		/>
		<InfoPanel
			title="For sophomores entering their junior year of high school"
			buttonLabel="Apply Now"
			backgroundColor="white"
			onClick={() => props.router.push('/MyRYLA')}
		/>
		<InfoPanel
			title="Hosted at the beautiful BSA Camp Hinds in Raymond, ME"
			buttonLabel="Directions"
			backgroundColor={pageTheme.primary}
			textColor="white"
			onClick={() => {props.router.push('/directions')}}
		/>
		<Footer/>
	</div>
);

export default Home;
