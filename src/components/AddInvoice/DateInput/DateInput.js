import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

const DateInput = props => (
  <BasicInput
    componentName="date"
    label="Date"
    type="text"
    {...props}
  />
);

export default DateInput;
