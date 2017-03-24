
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

	render() {
		this.props.auth.parseHash(window.location.hash);

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
								{/*this.getCurrentPanel()*/}
								{React.cloneElement(this.props.children, {auth: this.props.auth})}
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
