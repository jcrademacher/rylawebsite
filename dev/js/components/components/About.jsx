import React from 'react';
import {Panel} from 'react-bootstrap';

const divStyle = {
	//border: "1px solid black",
	margin: 20,
}

const About = (props) => {
	switch (props.currentInfoView) {
		case 0:
			return (
				<div style={divStyle}>
					<h1>About RYLA</h1>
					<br/>
					<p>
						<b>RYLA</b> is Rotary's youth leadership training program.  Though there are many variations for RYLA programs, our district's RYLA works with students the June after their sophomore year in high school.  RYLA programs in other areas are designed for college students or young adults just beginning their professional careers.  RYLA emphasizes leadership, citizenship, personal growth and service. <br/><br/>
						Here in District 7780 we believe that RYLA will assist young people to realize their potential and to adapt to experiences within their life and their communities. RYLA enables participants to join other young people from across our District. Students come together to exchange ideas, plans and opinions with other talented and energetic people like yourself in a supportive atmosphere, free from pressure and distraction. <br/><br/>

						In late June of each year, clubs throughout District 7780 send 120 high school sophomores to the Rotary Youth Leadership awards conference held at Camp Hinds in Raymond, Maine.  After registration, early Sunday morning, participants will be assigned to a Leadership Exploration Group (LEG) with 11 others where they will spend 4 days together exploring leadership concepts through a series of practical situations.  These include team building activities, group problem solving, confidence building and solo events. <br/><br/>

						Each LEG is guided through the conference by a team of experienced facilitators who have been selected by the District Chair because of their demonstrated leadership ability, commitment to the development of youth leaders, and experience with the RYLA program.
					</p>
				</div>
			);
			case 2:
				return (
					<div style={divStyle}>
						<h1>Contact</h1>
					</div>
				);
		default:
			return (
				<div style={divStyle}>
					<h1>Not found</h1>
				</div>
			);
	}
};

export default About;
