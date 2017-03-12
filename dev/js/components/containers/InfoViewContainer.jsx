import React from 'react';

import AboutView from '../components/AboutView.jsx';
import AboutMenu from '../components/AboutMenu.jsx';
import About from '../components/About.jsx';

const InfoViewContainer = (props) => {
	return (
		<div>
			<AboutView>
				{/*
				<AboutMenu
					infoViewChanged={props.infoViewChanged}
					navTabChanged={props.navTabChanged}
					currentInfoView={props.currentInfoView}
				/>
				<About
					currentInfoView={props.currentInfoView}
				/>*/}
			<AboutMenu/>
			<About/>
			</AboutView>
		</div>
	);
}

export default InfoViewContainer;
