import React from 'react';
import BasicInput from '../basicInput/basicInput';

const LicensePlateStateInput = props => (
  <BasicInput
    componentName="licensePlateState"
    label="License plate state"
    type="text"
    {...props}
  />
);

export default LicensePlateStateInput;
