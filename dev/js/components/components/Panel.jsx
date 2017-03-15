import React from 'react';

const Panel = (props) => {

	const border = props.borderWidth + "px solid " + props.borderColor;

	const panelStyle = {
		backgroundColor: props.backgroundColor,
		borderRadius: 6,
		border,
		color: props.textColor,
		boxShadow: "5px 5px 20px rgb(100, 100, 100)"
	};

	return (
		<div style={panelStyle}>
			{props.children}
		</div>
	);
};

export default Panel;
