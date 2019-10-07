import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

const MakeInput = props => (
  <BasicInput
    componentName="make"
    label="Make"
    type="text"
    {...props}
  />
);

export default MakeInput;
