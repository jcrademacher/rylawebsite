import React from 'react';

const styles = {
	left: {
		float: "left",
		width: "100%"
	},

	right: {
		float: "right",
		width: "100%"
	}
}

const AboutView = (props) => (
	<div style={{height: 500}}>
		<div style={styles.left}>
			{props.children[0]}
		</div>
		<div style={styles.right}>
			{props.children[1]}
		</div>
	</div>
);

export default AboutView;
