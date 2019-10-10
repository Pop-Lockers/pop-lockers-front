import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

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
