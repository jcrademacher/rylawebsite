import React from 'react';
import FieldGroup from '../components/FieldGroup.jsx';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Forgot extends React.Component {
	constructor(props) {
		super(props);

		this.email = '';
		this.state = {
			emailSent: false
		};
	}

	changePassword() {
		this.props.auth.changePassword(this.email, (err, resp) => {
			if(resp)
				this.setState({emailSent: true});
		});
	}

	// shows 'email sent' panel if user sent password reset email
	getPanel() {
		if(!this.state.emailSent) {
			return (
				<div>
					<h1>Enter your email</h1>
					<h3>We'll send you a link to change your password</h3>
					<br/>
					<FieldGroup
						id="email"
						type='text'
						placeholder="Email..."
						onChange={(e) => this.email = e.target.value}
					/>
					<br/>
					<Button
						bsStyle="success"
						block
						bsSize='large'
						onClick={() => this.changePassword()}
					>
						Send
					</Button>
				</div>
			);
		}
		else return (
			<div>
				<h1>Email Sent</h1>
				<br/>
				<Link style={{fontSize: 18, color: 'white'}} to='/login'>Return to login screen</Link>
				<br/><br/>
				<p>Note: If you did not receive an email it is likely that you entered an invalid or nonexistent address.</p>
			</div>
		);
	}

	render() {
		return this.getPanel();
	}
}
