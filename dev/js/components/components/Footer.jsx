import React from 'react';
import pageTheme from '../../styles.js';
import {Image} from 'react-bootstrap';
import fblogo from '../../../../resources/fb-art.png';

const footerStyle = {
	backgroundColor: pageTheme.secondary,
	color: "white",
	textAlign: "center"
};

const Logo = (props) => {
	var link = () => window.location = 'https://www.facebook.com/groups/68800142974/';

	const divStyle = {
		height: props.height,
		width: props.width,
		margin: "auto",
		cursor: "pointer"
	};

	return (
		<div style={divStyle} onClick={link}>
			<Image
				src={props.src}
				responsive
				circle
			/>
		</div>
	);
};

const Footer = () => {
	return (
		<div style={footerStyle}>
			<br/>
			<p>Visit us on Facebook </p>
			<Logo height="40" width="40" src={fblogo}/>
			<br/>
			<p>Copyright &copy; 2017 Jack Rademacher</p>
			<p>Created using React, Redux, and React-Bootstrap</p>
			<br/>
		</div>
	);
}

export default Footer;
