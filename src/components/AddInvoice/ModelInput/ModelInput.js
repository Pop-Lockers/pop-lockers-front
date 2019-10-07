import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

const ModelInput = props => (
  <BasicInput
    componentName="model"
    label="Model"
    type="text"
    {...props}
  />
);

export default ModelInput;
