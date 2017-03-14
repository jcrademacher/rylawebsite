const Panel = (props) => {

	const panelStyle = {
		backgroundColor: props.backgroundColor,
		borderRadius: 4,
		border: {props.borderWidth} + "px solid " + {props.borderColor},
	};

	return (
		<div style={panelStyle}>
			{props.children}
		</div>
	);
};

export default Panel;
