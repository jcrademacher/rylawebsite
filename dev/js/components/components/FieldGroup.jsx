import React from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

const FieldGroup = ({id, label, helpLabel, type}) => (
	<FormGroup controlId={id}>
    <h3 style={{fontSize: 20}}>{label}</h3>
    <FormControl type={type} />
    {helpLabel && <HelpBlock>{helpLabel}</HelpBlock>}
  </FormGroup>
);

export default FieldGroup;
