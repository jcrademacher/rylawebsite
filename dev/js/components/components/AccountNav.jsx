import React, { PropTypes as T} from 'react';
import { Link, browserHistory } from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const MLink = (props) => <Link style={{color: 'black', fontSize: 16}} to={props.to}>{props.children}</Link>;

const AccountNav = (props) => {

	// returns array of navitems with correct title and url from props
	const iterateTitles = () => {
		return props.titles.map((title, index) => {
			if(!props.collapse)
				return <span id={index}><MLink to={props.urls[index]}>{title}</MLink> &emsp;</span>;
			else
				return <MenuItem id={index} onClick={() => browserHistory.push(props.urls[index])}>{title}</MenuItem>
		});
	};

	const getNavbar = () => {
		if(!props.collapse) {
			return (
				<span>
					<strong><MLink to='/MyRYLA'>MyRYLA</MLink></strong> &emsp;
					{iterateTitles()}
				</span>
			);
		}
		else {
			return (
				<span>
					<DropdownButton id='accountnav' title="MyRYLA">
						{iterateTitles()}
					</DropdownButton>
				</span>
			);
		}
	};

	return (
		<div>
			<br/>
			<span style={{float: 'left'}}>
				{getNavbar()}
			</span>
			<span style={{float: "right", fontSize: 16}}>
				Welcome, {props.name}! &emsp;
				<Link style={{color: 'gray'}} to='/login' onClick={() => props.auth.logout()}>Sign out</Link>
			</span>
			<br/>
			<hr/>
		</div>
	);
}

AccountNav.propTypes = {
	auth: T.object.isRequired,
	name: T.string.isRequired
}

export default AccountNav;
