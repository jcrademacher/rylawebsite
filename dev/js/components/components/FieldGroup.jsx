import React from 'react';
import {FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'

const FieldGroup = ({id, label, helpLabel...props}) => (
	<FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {helpLabel && <HelpBlock>{helpLabel}</HelpBlock>}
  </FormGroup>
);

export default FieldGroup;
