import React from 'react';
import Navigation from '../components/Navigation.jsx';
import {pageTheme} from '../../styles.js';
import StaffImage from '../../../../resources/staff.jpg';

/*
	AppView Container
	Holds all necessary components for sitepage
*/
export default class AppView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var styles = {
			footerStyle: {
				backgroundColor: pageTheme.primary,
				color: "white",
				height: 100,
				textAlign: "center"
			},

			main: {
				backgroundImage: 'url(' + StaffImage + ')',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: "100% 100%",
				height: 100,
			}
		}

		return (
			<div>
				<Navigation/>
				<div style={styles.main}>

				</div>
				<footer style={styles.footerStyle}>
					<br/>
					<p>Copyright &copy; 2017 Jack Rademacher</p>
					<p>Created using React, Redux, and React-Bootstrap</p>
				</footer>
			</div>
		);
	}
}
