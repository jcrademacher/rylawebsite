import React from 'react';

import Navigation from '../components/Navigation.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { setWindowWidth, setWindowHeight, setProfile } from '../../actions';

function mapStateToProps(state) {
	return {
		windowWidth: state.windowWidth,
		windowHeight: state.windowHeight
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setWindowWidth, setWindowHeight, setProfile }, dispatch)
}

class AppContainer extends React.Component {
	constructor(props) {
		super(props);

		let { auth } = this.props.route;

		this.props.setProfile(auth.getProfile());

		auth.on('profile_updated', () => {
			this.props.setProfile(auth.getProfile());
		});
	}

	updateDimensions() {
		this.props.setWindowWidth(window.innerWidth);
		this.props.setWindowHeight(window.innerHeight);
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}

	render() {
		return (
			<div>
				<Navigation path={this.props.location.pathname}/>
				<div style={{height: 47}}/>
				{React.cloneElement(this.props.children, { auth: this.props.route.auth })}
			</div>
		);
	}
}

//export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
