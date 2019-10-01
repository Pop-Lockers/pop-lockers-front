import React from 'react';
import BasicInput from '../basicInput/basicInput';

const AmountInput = props => (
  <BasicInput
    componentName="amount"
    label="Amount"
    type="text"
    {...props}
  />
);

export default AmountInput;
