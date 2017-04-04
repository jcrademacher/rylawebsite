import React, { PropTypes as T} from 'react';
import { Link } from 'react-router';

const AccountNav = (props) => {

	return (
		<div>
			<br/>
			<strong>MyRYLA</strong>
			<span style={{float: "right"}}>
				Welcome, {props.name}! &emsp;
				<Link style={{color: 'gray'}} to='/login' onClick={() => props.auth.logout()}>Sign out</Link>
			</span>
			<hr/>
		</div>
	);
}

AccountNav.propTypes = {
	auth: T.object.isRequired,
	name: T.string.isRequired
}

export default AccountNav;
