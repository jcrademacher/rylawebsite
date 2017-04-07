import React from 'react';


class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	getStatus() {
		if(this.props.profile.user_metadata.appComplete)
			return <strong style={{color: 'green'}}>Complete</strong>
		else return <strong style={{color: 'red'}}>Incomplete</strong>
	}

	getDecision() {
		const meta = this.props.profile.user_metadata;

		if(meta.appDecision == 'accepted') {
			return <strong style={{color: 'green'}}>You have been accepted to RYLA {meta.appTerm}!</strong>
		}
		else if(meta.appDecision == 'unknown')
			return <span>You will be notified of your admission decision to RYLA {meta.appTerm} soon!</span>
		else if(meta.appDecision == 'denied')
			return <strong style={{color: 'red'}}>
				We are sorry to inform you that we were unable to offer you a spot at RYLA {meta.appTerm}.
			</strong>
	}

	render() {
		return (
			<div>
				<h2>Dashboard</h2>
				<hr/>
				<h3>Application Status: {this.getStatus()}</h3>
				<p>Application Decision: {this.getDecision()}</p>
			</div>
		);
	}
}

export default Dashboard;
