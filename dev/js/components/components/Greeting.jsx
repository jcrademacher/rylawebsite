import React from 'react';
import {Button} from 'react-bootstrap';
import StaffImage from '../../../../resources/staff.jpg';

const Greeting = () => {
	var greeting = {
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
			<h1><i>Be a gift to the world</i></h1>
			<Button bsStyle="primary">Join RYLA Today</Button>
		</div>
	);
};

export default Greeting;
