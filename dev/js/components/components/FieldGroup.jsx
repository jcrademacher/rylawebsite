import React, { PropTypes as T } from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

export default class FieldGroup extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			textValue: ''
		};
	}

	onChange(e) {
		this.setState({ textValue: e.target.value });

		this.props.onChange(e);
	}

	render() {
		return (
			<FormGroup controlId={this.props.id} validationState={this.props.validationState}>
		    {this.props.label && <h3 style={{fontSize: 20}}>{this.props.label}</h3>}
		    <FormControl type={this.props.type} placeholder={this.props.placeholder} onChange={(e) => this.onChange(e)}/>
				{this.props.feedback && <FormControl.Feedback/>}
		    {this.props.helpLabel && <HelpBlock>{this.props.helpLabel}</HelpBlock>}
		  </FormGroup>
		);
	}
};

FieldGroup.propTypes = {
	id: T.string.isRequired,
	label: T.string,
	validationState: T.string,
	placeholder: T.string,
	feedback: T.bool,
	type: T.string.isRequired,
	onChange: T.func,
	helpLabel: T.string
};

FieldGroup.defaultProps = {
	feedback: false,
	validationState: null,
	placeholder: "",
	onChange: function() {}
};
