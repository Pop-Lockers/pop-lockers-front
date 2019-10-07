import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

const LicensePlateNumberInput = props => (
  <BasicInput
    componentName="licensePlateNumber"
    label="License plate number"
    type="text"
    {...props}
  />
);

export default LicensePlateNumberInput;
