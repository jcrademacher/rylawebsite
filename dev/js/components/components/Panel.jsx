import React from 'react';

const Panel = (props) => {

	const border = props.borderWidth == undefined ? 'none' : props.borderWidth + "px solid " + props.borderColor;

	var backgroundColor = props.backgroundColor == undefined ? "none" : props.backgroundColor;
	var shadow = props.shadow == undefined || props.shadow == false ? "none" : "10px 10px 15px rgb(130, 130, 130)";

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
