import React from 'react';
import FieldGroup from '../components/FieldGroup.jsx';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Forgot extends React.Component {
	constructor(props) {
		super(props);

		this.email = '';
		this.state = {
			emailSent: false,
			isLoading: false
		};
	}

	changePassword() {
		this.setState({ isLoading: true });
		this.props.auth.changePassword(this.email, (err, resp) => {
			if(resp)
				this.setState({emailSent: true});

			this.setState({ isLoading: false });
		});
	}

	// shows 'email sent' panel if user sent password reset email
	getPanel() {
		let { isLoading } = this.state;

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
						onClick={!isLoading ? () => this.changePassword() : null}
						disabled={isLoading}
					>
						{!isLoading ? 'Send' : 'Please wait...'}
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
