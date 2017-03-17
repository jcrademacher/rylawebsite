import React from 'react';
import { Button, Grid, Col, Row } from 'react-bootstrap';

import { Link } from 'react-router';

import Panel from '../components/Panel.jsx';
import FieldGroup from '../components/FieldGroup.jsx';

import pageTheme from '../../styles.js';

const divStyle = {
	textAlign: "center",
	backgroundColor: pageTheme.secondary,
	height: 900,
	color: "white",
}

class Login extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			fname: '',
			lname: '',
			email: '',
			password: '',
			cpassword: ''
		}
	}

	getValidationState() {
		if(this.state.cpassword == '') return null;
		else return this.state.password == this.state.cpassword ? 'success' : 'error';
	}

	getButtonDisabledState() {
		const {fname} = this.state;
		const {lname} = this.state;
		const {email} = this.state;
		const {password} = this.state;
		const {cpassword} = this.state;

		if(fname != '' && lname != '' && email != '' && password != '' && cpassword != '') {
			if(cpassword == password)
				return false;
		}

		return true;
	}

	getCurrentPanel() {
		if(this.props.router.location.hash == '') {
			return (
				<div>
					<h1>Sign in to your MyRYLA account</h1>
					<h3>You are not currently logged in</h3>
					<br/>
					<FieldGroup
						type="text"
						placeholder="Username..."
						id="username"
						onChange={(e) => this.setState({email: e.target.value})}
					/>
					<FieldGroup
						type="password"
						placeholder="Password..."
						id="password"
						onChange={(e) => this.setState({password: e.target.value})}
					/>
					<br/>
					<Button
						bsSize='large'
						bsStyle='success'
						block
						onClick={() => this.props.auth.login(this.state.email, this.state.password)}
					>
						Log in
					</Button><br/>
					<a style={{color: "white"}} href='#register'>Don't have an account? Register here.</a>
				</div>
			);
		}
		else if(this.props.router.location.hash == '#register') {
			return (
				<div>
					<h1>Register for MyRYLA</h1>
						<div style={{textAlign: "left"}}><br/>
						<FieldGroup
							type="text"
							id="firstname"
							label="First Name:"
							onChange={(e) => this.setState({fname: e.target.value})}
						/>
						<FieldGroup
							type="text"
							id="lastname"
							label="Last Name:"
							onChange={(e) => this.setState({lname: e.target.value})}
						/>
						<FieldGroup
							type="text"
							id="email"
							label="Email:"
							onChange={(e) => this.setState({email: e.target.value})}
						/>
						<FieldGroup
							type="password"
							id="password"
							label="Create a password:"
							onChange={(e) => this.setState({password: e.target.value})}
						/>
						<FieldGroup
							type="password"
							id="confirmpassword"
							label="Confirm your password:"
							onChange={(e) => this.setState({cpassword: e.target.value})}
							feedback
							validationState={this.getValidationState()}
						/>
						<Button
							disabled={this.getButtonDisabledState()}
							bsStyle='success'
							bsSize='large'
							block
							onClick={() => this.props.auth.signup(this.state.email, this.state.password);}>
							Register
						</Button>
					</div>
				</div>
			);
		}
	}

	render() {
		this.props.auth.parseHash(this.props.router.location.hash);

		return (
			<div style={divStyle}>
				<Grid>
					<Row>
						<Col xs={1} sm={2} md={3}/>
						<Col xs={10} sm={8} md={6}>
							<div style={{marginTop: 100}}><Panel
								borderWidth="1"
								borderColor="white"
							>
								{this.getCurrentPanel()}
							</Panel></div>
						</Col>
						<Col xs={1} sm={2} md={3}/>
					</Row>
				</Grid>
			</div>
		);
	}
};

export default Login;
