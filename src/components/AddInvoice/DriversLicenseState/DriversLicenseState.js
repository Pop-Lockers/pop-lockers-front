import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

const DriversLicenseState = props => (
  <BasicInput
    componentName="driversLicenseState"
    label="Driver's license state"
    type="text"
    {...props}
  />
);

export default DriversLicenseState;
