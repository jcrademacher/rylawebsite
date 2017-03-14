import React from 'react';
import {Button} from 'react-bootstrap';

class InfoPanel extends React.Component {

	render() {
		var textColor = this.props.textColor;

		if(this.props.textColor == undefined)
			textColor = "black";

		const divStyle = {
			backgroundColor: this.props.backgroundColor,
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
				<h1 style={hstyle}>{this.props.title}</h1>
				<br/>
				<Button bsStyle="success" onClick={this.props.onClick}>{this.props.buttonLabel}</Button>
				<br/><br/><br/><br/>
			</div>
		);
	}
}

export default InfoPanel;
