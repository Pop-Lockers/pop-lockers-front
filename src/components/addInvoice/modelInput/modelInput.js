import React from 'react';
import BasicInput from '../basicInput/basicInput';

const ModelInput = props => (
  <BasicInput
    componentName="model"
    label="Model"
    type="text"
    {...props}
  />
);

export default ModelInput;
