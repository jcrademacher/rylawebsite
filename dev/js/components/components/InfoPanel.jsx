import React from 'react';
import {Button} from 'react-bootstrap';

const InfoPanel = (props) => {
	var textColor = props.textColor;

	if(props.textColor == undefined)
		textColor = "black";

	const divStyle = {
		backgroundColor: props.backgroundColor,
		height: 300,
		textAlign: "center",
		color: textColor,
	};

	const hstyle = {
		margin: 10,
		fontSize: 36
	};

	return (
		<div style={divStyle}>
			<br/><br/><br/>
			<h1 style={hstyle}>{props.title}</h1>
			<br/>
			<Button bsStyle="success">{props.buttonLabel}</Button>
		</div>
	);
}

export default InfoPanel;
