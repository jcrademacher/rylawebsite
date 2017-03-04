import React from 'react';
import pageTheme from '../../styles.js';
import {Carousel} from 'react-bootstrap';
import {ResponsiveEmbed} from 'react-bootstrap';
import {images} from '../../images.js';
import parchment from '../../../../resources/parchment.png';

const divStyle = {
	backgroundColor: pageTheme.secondary,
	height: "100%",
	textAlign: "center",
};

const pictureSpanStyle = {
	maxWidth: 800,
	maxHeight: 700,
	display: "block",
	marginLeft: 'auto',
	marginRight: 'auto',
};


// loops through all images and creates a carousel item
const createCarouselItems = () => {
	return images.map((img) => {
		console.log("mapping");
		return (
			<div>
				<span style={pictureSpanStyle}>
					<ResponsiveEmbed a4by3>
						<img
							src={img}
							style={{border: "8px ridge white"}}
						/>
					</ResponsiveEmbed>
				</span>
				<br/>
				<br/>
			</div>
		);
	});
}

const PhotoViewer = (props) => {
	return	(
		<div style={divStyle}>
			<br/>
			<br/>
			<br/>
			<br/>
			<center>
				{createCarouselItems()}
			</center>
		</div>
	);
}

export default PhotoViewer;
