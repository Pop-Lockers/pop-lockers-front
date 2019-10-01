import React from 'react';
import BasicInput from '../basicInput/basicInput';

const YearInput = props => (
  <BasicInput
    componentName="year"
    label="Year"
    type="text"
    {...props}
  />
);

export default YearInput;
