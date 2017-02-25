import React from 'react';
import Navigation from '../components/Navigation.jsx'

export default class AppView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navigation/>
		);
	}
}
