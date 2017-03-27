import React from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

export default class MyRYLA extends React.Component {
	constructor(props) {
		super(props);

		this.props.auth.on('profile_updated', () => this.setState({ name: this.props.auth.getProfile().user_metadata.name }));

		this.state = {
			name: this.props.auth.getProfile().user_metadata.name
		}
	}

	logout() {
		this.props.auth.logout();

		browserHistory.replace('/login');
	}

	render() {
		return (
			<div>
				<br/><br/>
				<h1>{this.state.name}</h1>
				<Button onClick={() => this.logout()}>Logout</Button>
			</div>
		);
	}
}
