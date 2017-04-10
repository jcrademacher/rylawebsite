import React from 'react';
import AccountNav from '../components/AccountNav.jsx';

import {connect} from 'react-redux';

import { Route, IndexRoute, browserHistory } from 'react-router';

import Panel from '../components/Panel.jsx';

import { Button,  } from 'react-bootstrap';

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

		// marks component as not ready to be loaded
		this.state = {
			componentReady: props.profile != null
		}

		// when AuthService emits profile updated event, update redux
		this.props.auth.on('profile_updated', () => {
			this.setState({componentReady: true});
		});
	}

	render() {
		if(this.state.componentReady) {
			return (
				<div style={{ marginRight: 26, marginLeft: 26 }}>
					<AccountNav
						auth={this.props.auth}
						name={this.props.profile.user_metadata.name}
						collapse={this.props.windowWidth < 768}
						titles={['Dashboard', 'Profile', 'Activities', 'Additional Information']}
						urls={['/MyRYLA', '/MyRYLA/profile', '/MyRYLA/activities', '/MyRYLA/info']}
					/>
					<Panel
						textColor='black'
						backgroundColor='rgb(156, 212, 228)'
						shadow
					>
						{React.cloneElement(this.props.children, {
							profile: this.props.profile,
							windowWidth: this.props.windowWidth,
							windowHeight: this.props.windowHeight})}
					</Panel>
				</div>
			);
		}
		else return (
			<div style={{margin: 20}}>
				<h2>Could not load profile.</h2>
				<Button bsStyle='danger' onClick={() => { this.props.auth.logout(); browserHistory.push('/login') }}>Click here to sign out</Button>
				<br/>
				<p>Check for an update on your browser to ensure capability with this portal.
					<br/>
					If the problem persists, please download <a href="https://www.google.com/chrome/browser/desktop/index.html" >Google Chrome</a> (it's the better browser anyways).
				</p>
			</div>
		);
	}
}

export default connect(mapStateToProps)(MyRYLA);
