import React from 'react';
import FieldGroup from '../components/FieldGroup.jsx';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			loginError: false,
			isLoading: false
		}
	}

	login() {
		this.setState({ isLoading: true});

		this.props.auth.login(this.state.email, this.state.password, (err) => {
			if(err != undefined)
				this.setState({ loginError: true });
			else this.setState({ loginError: false });
		});
	}

	render() {
		let { isLoading } = this.state;

		return (
			<div>
				<h1>Sign in to your MyRYLA account</h1>
				<h3>{this.state.loginError ? 'Username or password is incorrect' : 'You are not currently logged in'}</h3>
				<br/>
				<FieldGroup
					type="text"
					placeholder="Username..."
					id="username"
					onChange={(e) => this.setState({email: e.target.value})}
					feedback
					validationState={this.state.loginError ? 'error' : null}
				/>
				<FieldGroup
					type="password"
					placeholder="Password..."
					id="password"
					onChange={(e) => this.setState({password: e.target.value})}
					feedback
					validationState={this.state.loginError ? 'error' : null}
				/>
				<br/>
				<Button
					bsSize='large'
					bsStyle='success'
					block
					onClick={!isLoading ? () => this.login() : null}
					disabled={isLoading}
				>
					{!isLoading ? "Log in" : "Please wait..."}
				</Button><br/>
				<Link style={{color: "white"}} to='login/register'>Don't have an account? Register here.</Link><br/>
				<Link style={{color: "white"}} to='login/forgot'>Forgot password? Click here.</Link>
			</div>
		);
	}
}
