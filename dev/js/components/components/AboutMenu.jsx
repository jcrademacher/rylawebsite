import React from 'react';

const divStyle = {
	//border: "4px solid black",
	margin: 10
};

const AboutMenu = (props) => (
	<div style={divStyle}>
		<br/><br/>
		<ul>
			<li><a href="javascript:console.log('test')">Test Link</a></li>
		</ul>
	</div>
);

const MenuLink = (props) => (
	<a></a>
);

export default AboutMenu;
