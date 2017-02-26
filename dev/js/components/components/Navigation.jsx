import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="/">RYLA District 7780</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	        <NavItem eventKey={1} href="#">About</NavItem>
	        <NavItem eventKey={2} href="#">Contact</NavItem>
	      </Nav>
	    </Navbar.Collapse>
  	</Navbar>
	);
}

export default Navigation;
