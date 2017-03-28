import React from 'react';
import { browserHistory } from 'react-router';
import AccountNav from '../components/AccountNav.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { setProfile } from '../../actions';

// sends store state into AppView as props
function mapStateToProps(state) {
	return {
		profile: state.profile,
	};
}

// links actions with redux to be available as props in AppView
function mapDispatchToProps(dispatch) {
	return bindActionCreators({setProfile}, dispatch);
}

class MyRYLA extends React.Component {
	constructor(props) {
		super(props);

		// when AuthService emits profile updated event, update redux
		this.props.auth.on('profile_updated', () => {
			this.props.setProfile(this.props.auth.getProfile());
		});

		this.props.setProfile(this.props.auth.getProfile());
	}

	render() {
		const name = this.props.profile == null ? '' : this.props.profile.user_metadata.name;

		return (
			<div>
				<br/><br/>
				<AccountNav auth={this.props.auth} name={name}/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRYLA);
