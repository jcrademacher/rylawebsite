import React from 'react';
import pageTheme from '../../styles.js';

const styles = {
	left: {
		float: "left",
		width: "30%",
	},

	right: {
		float: "right",
		width: "70%",

	}
}

const AboutView = (props) => (
	<div>
		<div style={styles.left}>
			{props.children[0]}
		</div>
		<div style={styles.right}>
			{props.children[1]}
		</div>
	</div>
);

export default AboutView;
