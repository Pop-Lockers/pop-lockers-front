import React from 'react';
import BasicInput from '../basicInput/basicInput';

const DriversLicenseNumberInput = props => (
  <BasicInput
    componentName="driversLicenseNumber"
    label="Driver's license number"
    type="text"
    {...props}
  />
);

export default DriversLicenseNumberInput;
