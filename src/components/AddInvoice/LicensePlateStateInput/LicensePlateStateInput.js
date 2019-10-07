import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

const LicensePlateStateInput = props => (
  <BasicInput
    componentName="licensePlateState"
    label="License plate state"
    type="text"
    {...props}
  />
);

export default LicensePlateStateInput;
