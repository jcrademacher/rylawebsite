import React from 'react';
import {Button} from 'react-bootstrap';
import StaffImage from '../../../../resources/lake.png';
import {dispatch} from 'redux';

const Greeting = (props) => {
	const greeting = {
		height: 600,
		display: "table-cell",
		verticalAlign: "middle",
		width: "2000",

		backgroundImage: 'url(' + StaffImage + ')',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: "cover",
		backgroundAttachment: "fixed",

		textAlign: "center",
		color: "white"
	};

	return (
		<div style={greeting}>
			<h1 style={{fontSize: 60}}><i>Be your best self</i></h1>
			<Button bsStyle="success" onClick={props.onClick}>
				How?
			</Button>
		</div>
	);
};

export default Greeting;
