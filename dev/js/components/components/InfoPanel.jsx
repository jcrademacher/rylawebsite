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
			fontSize: 36
		};

		return (
			<div style={divStyle}>
				<br/><br/><br/>
				<div style={{margin: 20}}><h1 style={hstyle}>{this.props.title}</h1>
				<br/>
				<Button bsStyle="success" onClick={this.props.onClick}>{this.props.buttonLabel}</Button></div>
				<br/><br/><br/>
			</div>
		);
	}
}

export default InfoPanel;
