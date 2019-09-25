import React from 'react';
import BasicInput from '../basicInput/basicInput';

const PhoneNumberInput = props => (
  <BasicInput
    componentName="phoneNumber"
    label="Phone number"
    type="text"
    {...props}
  />
);

export default PhoneNumberInput;
