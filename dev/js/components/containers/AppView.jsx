import React from 'react';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import Content from '../components/Content.jsx';
import Greeting from '../components/Greeting.jsx';

/*
	AppView Container
	Holds all necessary components for sitepage
*/
export default class AppView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navigation/>
				<Content>
					<Greeting/>
				</Content>
				<Footer/>
			</div>
		);
	}
}
