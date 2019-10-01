import React from 'react';
import BasicInput from '../basicInput/basicInput';

const ColorInput = props => (
  <BasicInput
    componentName="color"
    label="Color"
    type="text"
    {...props}
  />
);

export default ColorInput;
