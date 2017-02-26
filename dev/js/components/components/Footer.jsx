import React from 'react';
import {pageTheme} from '../../styles.js';

const footerStyle = {
	backgroundColor: pageTheme.primary,
	color: "white",
	height: 100,
	textAlign: "center"
};

const Footer = () => {
	return (
		<div>
			<footer style={footerStyle}>
				<br/>
				<p>Copyright &copy; 2017 Jack Rademacher</p>
				<p>Created using React, Redux, and React-Bootstrap</p>
			</footer>
		</div>
	);
}

export default Footer;
