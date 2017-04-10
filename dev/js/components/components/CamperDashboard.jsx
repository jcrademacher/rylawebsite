import React from 'react';


class CamperDashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	getStatus(element) {
		if(element)
			return <strong style={{color: 'green'}}>Complete</strong>
		else return <strong style={{color: 'red'}}>Incomplete</strong>
	}

	getDecision() {
		const meta = this.props.profile.user_metadata;

		if(meta.appDecision == 'accepted') {
			return <strong style={{color: 'green'}}>You have been accepted to RYLA {meta.appTerm}!</strong>
		}
		else if(meta.appDecision == null)
			return <span>You will be notified of your admission decision to RYLA {meta.appTerm} soon!</span>
		else if(meta.appDecision == 'denied')
			return <strong style={{color: 'red'}}>
				We are sorry to inform you that we were unable to offer you a spot at RYLA {meta.appTerm}.
			</strong>
	}

	render() {
		let meta = this.props.profile.user_metadata;

		return (
			<div>
				<h2>Dashboard</h2>
				<hr/>
				<h3>Application Status: {this.getStatus(meta.appComplete)}</h3>
				<p>Application Decision: {this.getDecision()}</p>
				<hr/>
				<p style={{fontSize: 20}}>
					Profile: {this.getStatus(meta.profileComplete)} <br/>
					Activities: {this.getStatus(meta.activitiesComplete)} <br/>
					Additional Information: {this.getStatus(meta.additionalInfoComplete)} <br/>
				</p>
			</div>
		);
	}
}

export default CamperDashboard;
