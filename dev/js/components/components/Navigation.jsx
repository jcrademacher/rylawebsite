import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import RYLA from "../../../../resources/ryla.png";

const rylaStyle = {
	height: 30,
	width: 80
};

const Navigation = (props) => {
	return (
		<Navbar fixedTop fluid>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="/"><img src={RYLA} style={rylaStyle}/></a>
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
