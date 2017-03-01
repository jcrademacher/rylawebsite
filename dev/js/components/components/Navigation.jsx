import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';

const rylaStyle = {
	height: 30,
	width: 80
};

const Navigation = (props) => {
	return (
		<div style={{border: "2px solid black"}}>
			<Navbar fixedTop fluid>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="/">RYLA District 7780</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav pullRight activeKey={props.activeKey} onSelect={props.onChange}>
						<NavItem eventKey={0} href="#">Home</NavItem>
		        <NavItem eventKey={1} href="#">Apply</NavItem>
						<NavItem eventKey={2} href="#">Gallery</NavItem>
		        <NavItem eventKey={3} href="#">About RYLA</NavItem>
						<NavItem eventKey={4} href="#">Contact</NavItem>
		      </Nav>
		    </Navbar.Collapse>
  		</Navbar>
		</div>
	);
}

export default Navigation;
