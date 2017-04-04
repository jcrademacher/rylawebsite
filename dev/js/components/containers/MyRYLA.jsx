import React from 'react';
import { browserHistory } from 'react-router';
import AccountNav from '../components/AccountNav.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { setProfile } from '../../actions';

import { Route, IndexRoute } from 'react-router';

import Panel from '../components/Panel.jsx';

// sends store state into AppView as props
function mapStateToProps(state) {
	return {
		profile: state.profile,
		windowWidth: state.windowWidth,
		windowHeight: state.windowHeight
	};
}

class MyRYLA extends React.Component {
	constructor(props) {
		super(props);

		this.profile = props.auth.getProfile();

		this.state = {
			componentReady: this.profile != null
		}

		// when AuthService emits profile updated event, update redux
		props.auth.on('profile_updated', () => {
			this.profile = props.auth.getProfile();
			this.setState({componentReady: true});
		});
	}

	render() {
		if(this.state.componentReady) {
			return (
				<div style={{ marginRight: 26, marginLeft: 26 }}>
					<br/><br/>
					<AccountNav auth={this.props.auth} name={this.profile.user_metadata.name}/>
					<Panel
						textColor='black'
						backgroundColor='rgb(156, 212, 228)'
						shadow
					>
						{React.cloneElement(this.props.children, {
							profile: this.profile,
							windowWidth: this.props.windowWidth,
							windowHeight: this.props.windowHeight})}
					</Panel>
				</div>
			);
		}
		else return (
			<div>
				<br/><br/>
				<h2>Loading...</h2>
			</div>
		);
	}
}

export default connect(mapStateToProps)(MyRYLA);
