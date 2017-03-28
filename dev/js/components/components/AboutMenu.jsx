import React from 'react';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

import { browserHistory } from 'react-router';

const divStyle = {
	//border: "4px solid black",
	margin: 10
};

const AboutMenu = (props) =>  {
	const handleNavSelect = (key) => {
		switch (key) {
			case 0:
				browserHistory.push('/about');
				break;
			case 1:
				browserHistory.push('/principles');
				break;
			case 2:
				browserHistory.push('/contact');
				break;
			case 3:
				browserHistory.push('/directions');
				break;
			case 4:
				browserHistory.push('/faq');
				break;
		}
	};

	const getActiveKey = () => {
		switch (props.path) {
			case '/about': 						return 0;
			case '/principles': return 1;
			case '/contact': 		return 2;
			case '/directions': return 3;
			case '/faq': 				return 4;
		}
	}

	const navItems = [
		"About RYLA", "The Principles of Rotary", "Contact", "Directions to Camp Hinds", "FAQ"
	];

	// returns correct nav items based on prop dropdown
	// requires a different component for a dropdown
	const getNavItems = (type) => {
		if(type == 'nav') {
			return (
				// loops through all elements in list
				<Nav stacked bsStyle="pills" activeKey={getActiveKey()} onSelect={handleNavSelect}>
					{navItems.map((title, index) => {
						return (
							<NavItem eventKey={index}>{title}</NavItem>
						);
					})}
				</Nav>
			);
		}
		else if(type == 'dropdown') {
			return (
				<DropdownButton id='dropdown' title={navItems[getActiveKey()]} onSelect={handleNavSelect}>
					{navItems.map((title, index) => {
						return (
							<MenuItem eventKey={index}>{title}</MenuItem>
						);
					})}
				</DropdownButton>
			);
		}
	}

	//sets dropdown to false if undefined, actual value if not undefined
	const dropdown = props.dropdown == undefined ? false : props.dropdown;

	return (
		<div style={divStyle}>
			{getNavItems(dropdown ? 'dropdown':'nav')}
		</div>
	);
};

export default AboutMenu;
