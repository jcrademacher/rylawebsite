import React from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

export default class MyRYLA extends React.Component {
	constructor(props) {
		super(props);
	}

	logout() {
		this.props.auth.logout();

		browserHistory.replace('/login');
	}

	render() {
		return (
			<div>
				<br/><br/>
				<h1>MyRYLA</h1>
				<Button onClick={() => this.logout()}>Logout</Button>
			</div>
		);
	}
}
