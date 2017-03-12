import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {PropTypes} from 'react';

import { Link } from 'react-router';

import { browserHistory } from 'react-router';

const rylaStyle = {
	height: 30,
	width: 80
};

const Navigation = (props) => {
	const handleRouterLink = (key) => {
		console.log("key: ", key);

		switch (key) {
			case 0:
				browserHistory.push('/');
				break;
			case 1:
				browserHistory.push('/');
				break;
			case 2:
				browserHistory.push('/gallery');
				break;
			case 3:
				browserHistory.push('/about');
				break;
		}
	};

	const getActiveKey = () => {
		switch (props.path) {
			case '/': return 0;
			case '/MyRYLA': return 1;
			case '/gallery': return 2;
			case '/about': return 3;
		}
	}

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
		      <Nav pullRight
						activeKey={getActiveKey()}
						onSelect={handleRouterLink}
					>
						<NavItem eventKey={0}>Home</NavItem>
		        {/*<NavItem eventKey={1}>MyRYLA</NavItem>*/}
						<NavItem eventKey={2}>Gallery</NavItem>
		        <NavItem eventKey={3}>About RYLA</NavItem>
		      </Nav>
		    </Navbar.Collapse>
  		</Navbar>
		</div>
	);
}

export default Navigation;
