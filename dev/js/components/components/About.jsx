import React from 'react';

const divStyle = {
	//border: "1px solid black",
	margin: 20,
}

const AboutRYLA = () => (
	<div style={divStyle}>
		<h1>About RYLA</h1>
		<hr/>
		<p>
			<b>RYLA</b> is Rotary's youth leadership training program.  Though there are many variations for RYLA programs, our district's
			RYLA works with students the June after their sophomore year in high school.  RYLA programs in other areas are designed for
			college students or young adults just beginning their professional careers.  RYLA emphasizes leadership, citizenship, personal
			growth and service. <br/><br/>

			Here in District 7780 we believe that RYLA will assist young people to realize their potential and to adapt to experiences
			within their life and their communities. RYLA enables participants to join other young people from across our District.
			Students come together to exchange ideas, plans and opinions with other talented and energetic people like yourself in a
			supportive atmosphere, free from pressure and distraction. <br/><br/>

			In late June of each year, clubs throughout District 7780 send 120 high school sophomores to the Rotary Youth Leadership
			awards conference held at Camp Hinds in Raymond, Maine.  After registration, early Sunday morning, participants will be
			assigned to a Leadership Exploration Group (LEG) with 11 others where they will spend 4 days together exploring leadership
			concepts through a series of practical situations.  These include team building activities, group problem solving, confidence
			building and solo events. <br/><br/>

			Each LEG is guided through the conference by a team of experienced facilitators who have been selected by the District Chair
			because of their demonstrated leadership ability, commitment to the development of youth leaders, and experience with the
			RYLA program.
		</p>
	</div>
);

const Contact = () => (
	<div style={divStyle}>
		<h1>Contact</h1>
		<hr/>
		<h3><b>Phil Giordano</b></h3>
		<h3>District 7780 - RYLA Chair</h3>
		<h3>Camp Executive Director</h3>
		<br/>
		<h3><b>Email:</b> philtastic7780@gmail.com</h3>
		<h3><b>Phone:</b> (207) - 636 - 6500</h3>
		<hr/>
		<h3><b>US Mail Address:</b></h3>
		<h3>RYLA</h3>
		<h3>C/O Phil Giordano</h3>
		<h3>P.O. Box 124</h3>
		<h3>Kennebunk, ME 04043-0124</h3>
	</div>
);

const Directions = () => (
	<div style={divStyle}>
		<h1>Directions</h1>
		<hr/>
		<h3><b>Address:</b> 146 Plains Road, Raymond, ME 04071</h3>
		<h3>From 95 North and South:</h3>
		<ol>
			<li>Take exit 63 Gray off the Maine Turnpike </li>
			<li>Turn left onto Route 202, go 0.5 miles </li>
			<li>Turn right onto Route 26a Go 3 miles and turn left onto North Raymond Road (by Dry Mills
					Store)
			</li>
			<li>Go 1.0 mile and turn left onto Egypt Road </li>
			<li>Go 4.0 miles, at end of Egypt Road, take right onto route 85 </li>
			<li>Go 1.8 miles, past schools and down a large hill </li>
			<li>Turn left onto Plains Road </li>
			<li>Camp is 0.3 miles on left </li>
		</ol>
	</div>
);

const Principles = () => (
	<div style={divStyle}>
		<h1>Principles of Rotary</h1>
		<hr/>
		<h3><b>Theme:</b></h3>
		<p>Every year the newly elected Rotary International President chooses a theme for Rotarians during his/her
			presidency. Last year's theme was <i>Be a gift to the world</i>. This year's theme is <i>Making a Difference</i>, chosen by
			current president Ian Riseley. The theme is meant to serve as general ethical and moral guideline for all Rotarians across
			the globe.
		</p>
	</div>
);

const FAQ = () => (
	<div style={divStyle}>
		<h1>FAQ</h1>
		<hr/>
		<p>
			Q: <b>When is RYLA 2017?</b><br/>
			A: Sunday June 25—Wednesday June 28 2017.<br/><br/>
			Q: <b>What time should I arrive?</b><br/>
			A: All participants are expected to arrive at 8:30 A.M. on Sunday, June 25th, 2017.<br/><br/>
			Q: <b>I have other plans on Sunday morning, May I arrive latse?</b><br/>
			A: Unfortunately, the answer is no. In the past we have alloswed participants to arrive late, they never really seem to
			catch up. RYLA is a fast paced conference. It’s also not faisr to the rest of your group who will depend on you.<br/><br/>
			Q: <b>What time is RYLA over?</b><br/>
			A: Closing ceremony for RYLA is Wednesday June 28th at 5:15 PM. Parents are invited to attend and encouraged to
			arrive at 5:00 or slightly before to have time to walk to the waterfront. The closing ceremony will be followed by a Barbecue
			at 5:45. Parents my attend the barbecue by purchasing a ticket for $12.00 or $20.00 for two at registration on
			the first day of camp. There is no charge for RYLA participants. Participants are released to parents after the closing
			ceremony so plan on 6:00 at the earliest.<br/><br/>

			Q: <b>What should I bring?</b><br/>
			A:
			<ul>
s
				<li>Consult the Equipment list for personal belongings and necessities.</li>
				Parents who plan on attending Wednesday Night BBQ should bring cash on registration day for tickets.
				Students need the following for registration
				Medical Form - (Either BSA form by itself or accompanied by a doctor’s form). You should have already submitted
				this form by June 1st, but if you have not, bring it with you. (exception process)
				Any medications required during the week. Do not pack medication in your luggage.
				Any updated information that has changed since your application. Students will not be permitted to travel with anybody
				other than a parent or guardian unless their names are on the registration forms that were sent to RYLA.
				Photo Release Form
			</ul>
		</p>
	</div>
);

const About = (props) => {
	switch (props.currentInfoView) {
		case 0:
			return <AboutRYLA/>;
			break;
		case 1:
			return <Principles/>
			break;
		case 2:
			return <Contact/>;
			break;
		case 3:
			return <Directions/>;
			break;
		case 4:
			return <FAQ/>;
			break;
		default:
			return (
				<div style={divStyle}>
					<h1>Not found</h1>
				</div>
			);
	}
};

export default About;
