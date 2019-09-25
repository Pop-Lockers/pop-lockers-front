import React from 'react';
import BasicInput from '../basicInput/basicInput';

const MakeInput = props => (
  <BasicInput
    componentName="make"
    label="Make"
    type="text"
    {...props}
  />
);

export default MakeInput;
