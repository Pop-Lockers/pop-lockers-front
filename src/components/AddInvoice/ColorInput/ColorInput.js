import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

const ColorInput = props => (
  <BasicInput
    componentName="color"
    label="Color"
    type="text"
    {...props}
  />
);

export default ColorInput;
