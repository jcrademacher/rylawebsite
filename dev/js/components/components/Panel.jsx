import React from 'react';

const Panel = (props) => {

	const border = props.borderWidth + "px solid " + props.borderColor;

	var backgroundColor = props.backgroundColor == undefined ? "none" : props.backgroundColor;
	var shadow = props.shadow == undefined || props.shadow == false ? "none" : "5px 5px 20px rgb(100, 100, 100)";

	const panelStyle = {
		backgroundColor: backgroundColor,
		borderRadius: 6,
		border,
		color: props.textColor,
		boxShadow: shadow,
		padding: 30
	};

	return (
		<div style={panelStyle}>
			{props.children}
		</div>
	);
};

export default Panel;
