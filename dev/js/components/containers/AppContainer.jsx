import React from 'react';

import Navigation from '../components/Navigation.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { setWindowWidth } from '../../actions';
import { setWindowHeight } from '../../actions';

function mapStateToProps(state) {
	return {
		windowWidth: state.windowWidth,
		windowHeight: state.windowHeight
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setWindowWidth, setWindowHeight }, dispatch)
}

class AppContainer extends React.Component {
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
