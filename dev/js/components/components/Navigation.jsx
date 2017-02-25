import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">React-Bootstrap</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav>
	        <NavItem eventKey={1} href="#">Link</NavItem>
	        <NavItem eventKey={2} href="#">Link</NavItem>
	      </Nav>
	      <Nav pullRight>
	        <NavItem eventKey={1} href="#">Link Right</NavItem>
	        <NavItem eventKey={2} href="#">Link Right</NavItem>
	      </Nav>
	    </Navbar.Collapse>
  	</Navbar>
	);
}

export default Navigation;
