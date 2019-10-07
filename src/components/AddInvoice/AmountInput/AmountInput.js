import React from 'react';
import BasicInput from '../BasicInput/BasicInput';

const AmountInput = props => (
  <BasicInput
    componentName="amount"
    label="Amount"
    type="text"
    {...props}
  />
);

export default AmountInput;
