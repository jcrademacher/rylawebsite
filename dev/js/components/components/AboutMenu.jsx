import React from 'react';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

const divStyle = {
	//border: "4px solid black",
	margin: 10
};

const AboutMenu = (props) =>  {
	const handleNavSelect = (key) => {
		props.infoViewChanged(key);
	};

	const navItems = [
		"About RYLA", "The Principles of Rotary", "Contact", "Directions to Camp Hinds", "FAQ"
	];

	// returns correct nav items based on prop dropdown
	// requires a different component for a dropdown
	const getNavItems = (type) => {
		if(type == 'nav') {
			return (
				// loops through all elements in list
				<Nav stacked bsStyle="pills" activeKey={props.currentInfoView} onSelect={handleNavSelect}>
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
				<DropdownButton title={navItems[props.currentInfoView]} onSelect={handleNavSelect}>
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
