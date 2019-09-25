import React from 'react';
import BasicInput from '../basicInput/basicInput';

const NameInput = props => (
  <BasicInput
    componentName="name"
    label="Name"
    type="text"
    autoFocus={true}
    {...props}
  />
);

export default NameInput;
