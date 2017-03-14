import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const loginPanelStyle = {
	backgroundColor: "rgb(210, 210, 210)",
	borderRadius: 10
};

const divStyle = {
	border: "1px solid black",
	//textAlign: "center",
	marginLeft: 200,
	marginRight: 200,

}
const LoginPanel = (props) => (
	<div style={loginPanelStyle}>
		<p>
			Loradfksdjkfasldfjasjdfasbdvka dkjfa sjdfkjasdfk askdfk asd askdfaksd fjas asd ka fska sf aksdf aksdf as dfhkasd fkashfd kasd
		</p>
	</div>
);

const MyRYLA = (props) => {
	return (
		<div style={{textAlign: "center"}}>
			<br/><br/>
			<h1>Sign in to your MyRYLA account</h1>
			<Row>
				<Col md={3}/>
				<Col md={6}>
					<LoginPanel/>
				</Col>
				<Col md={3}/>
			</Row>
		</div>
	);
};

export default MyRYLA;
