import React from 'react';
import pageTheme from '../../styles.js';
import {Carousel} from 'react-bootstrap';
import {ResponsiveEmbed} from 'react-bootstrap';
import {images} from '../../images.js';

const divStyle = {
	backgroundColor: pageTheme.secondary,
	height: "100vh",
	minHeight: "100%",
	textAlign: "center"
};

const createCarouselItems = () => {
	return images.map((img) => {
		console.log("mapping");
		return (
			<Carousel.Item>
				<center>
					<ResponsiveEmbed a4by3>
						<img
							src={img}
						/>
					</ResponsiveEmbed>
				</center>
			</Carousel.Item>
		);
	});
}

const PhotoViewer = (props) => {
	return	(
		<div style={divStyle}>
			<Carousel>
		    {createCarouselItems()}
		  </Carousel>
		</div>
	);
}

export default PhotoViewer;
