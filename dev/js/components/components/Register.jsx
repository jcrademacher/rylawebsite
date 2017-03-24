import React from 'react';
import FieldGroup from '../components/FieldGroup.jsx';
import { Button } from 'react-bootstrap';

export default class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fname: '',
			lname: '',
			email: '',
			password: '',
			cpassword: '',
			loginError: false,
			errorDescription: ''
		};
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

	signup() {
		this.props.auth.signup(this.state.email, this.state.password, (err) => {
			if(err != undefined)
				this.setState({loginError: true, errorDescription: err.description});
			else this.setState({ loginError: false, errorDescription: ''});
		}, { name: this.state.fname, lastname: this.state.lname }); //  passes data specified by user
	}

	render() {
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
						feedback
						validationState={this.state.loginError ? 'error' : null}
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
					<p>{this.state.errorDescription}</p>
					<Button
						disabled={this.getButtonDisabledState()}
						bsStyle='success'
						bsSize='large'
						block
						onClick={() => this.signup()}>
						Register
					</Button>
				</div>
			</div>
		);
	}
}
