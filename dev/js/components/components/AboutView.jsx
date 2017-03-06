import React from 'react';
import pageTheme from '../../styles.js';
import {images} from '../../images.js';
import {Image} from 'react-bootstrap';

class AboutView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		};
	}

	updateDimensions() {
		this.setState({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		});
	}

	// adds resize event listener
	componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

	// removes resize event listener
	componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

	render() {

		var AboutMenu = this.props.children[0];
		var About = this.props.children[1];

		const styles = {
			left: {
				float: "left",
				width: "70%",
			},

			right: {
				float: "right",
				width: "30%",
			},

			image: {
				textAlign: "center",
				padding: this.state.windowWidth >= 768 ? 10:60,
				// conditional, 10 padding if greater, 60 if less
			}
		}

		if(this.state.windowWidth >= 768) {
			return (
				<div>
					<br/>
					<br/>
					<div style={styles.left}>
						{About}
					</div>
					<div style={styles.right}>
						<div style={{height: "60vh"}}>
							<br/><br/>
							{React.cloneElement(AboutMenu, {dropdown: false})} {/* passes additional props to AboutMenu */}
						</div>
						<div style={styles.image}>
							<Image src={images[12]} responsive/>
						</div>
					</div>
				</div>
			);
		}
		else {
			return(
				<div>
					<br/><br/>
					<div style={styles.image}>
						<Image src={images[12]} responsive/>
					</div>
					<div style={{textAlign: "center"}}>
						{React.cloneElement(AboutMenu, {dropdown: true})}
					</div>
					<div>
						{About}
					</div>
				</div>
			);
		}
	}
};

export default AboutView;
