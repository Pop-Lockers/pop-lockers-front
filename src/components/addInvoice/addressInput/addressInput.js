import React from 'react';
import BasicInput from '../basicInput/basicInput';

const AddressInput = props => (
  <BasicInput
    componentName="address"
    label="Address"
    type="text"
    autoFocus={true}
    {...props}
  />
);

export default AddressInput;
