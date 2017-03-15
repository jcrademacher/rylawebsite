import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import { Link } from 'react-router';

import Panel from '../components/Panel.jsx';
import FieldGroup from '../components/FieldGroup.jsx';

import pageTheme from '../../styles.js';

const divStyle = {
	border: "1px solid",
	marginLeft: 200,
	marginRight: 200
}

const Login = (props) => (
	<div style={{textAlign: "left", margin: 18}}>
		<form>
			<FieldGroup
				id="username"
				type="text"
				label="Username:"
			/><br/>
			<FieldGroup
				id="password"
				type="password"
				label="Password:"
			/><br/>
			<Button block bsStyle="success">Log In</Button>
			<p style={{textAlign: "center"}}>Don't have an account? <Link style={{color: "white"}} to='/register'>Click here.</Link></p>
		</form>
	</div>
);



const MyRYLA = (props) => {
	return (
		<div style={{textAlign: "center"}}>
			<br/><br/><br/>
			<h1>Sign in to your MyRYLA account</h1>
			<br/>
			<Row>
				<Col xs={2} sm={3} md={4}/>
				<Col xs={8} sm={6} md={4}>
					<Panel
						borderColor="white"
						borderWidth="1"
						backgroundColor={pageTheme.secondary}
						textColor='white'
					>
						<Login/>
					</Panel>
				</Col>
				<Col xs={2} sm={3} md={4}/>
			</Row>
		</div>
	);
};

export default MyRYLA;
