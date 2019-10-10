import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

const PhoneNumberInput = props => (
  <BasicInput
    componentName="phoneNumber"
    label="Phone number"
    type="text"
    {...props}
  />
);

export default PhoneNumberInput;
