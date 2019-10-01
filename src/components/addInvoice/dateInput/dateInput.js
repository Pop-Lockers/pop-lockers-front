import React from 'react';
import BasicInput from '../basicInput/basicInput';

const DateInput = props => (
  <BasicInput
    componentName="date"
    label="Date"
    type="text"
    {...props}
  />
);

export default DateInput;
