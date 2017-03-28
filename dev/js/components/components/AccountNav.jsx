import React, { PropTypes as T} from 'react';
import { Link } from 'react-router';

const AccountNav = (props) => {
	const divStyle = {
		//border: '1px solid black',
		marginRight: 26,
		marginLeft: 26,
	}

	return (
		<div style={divStyle}>
			<br/>
			<span style={{textAlign: "right"}}>
				Welcome, {props.name}! &emsp;
				<Link style={{color: 'gray'}} to='/login' onClick={() => props.auth.logout()}>Sign out</Link>
			</span>
			<hr/>
		</div>
	);
}

AccountNav.propTypes = {
	auth: T.object.isRequired
}

export default AccountNav;
