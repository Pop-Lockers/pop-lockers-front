import React from 'react';
import SelectInput from '../selectInput/selectInput';

const selectLabels = ['$12', 'Member', 'Prepaid', 'Other'];

const AmountPaidInput = props => (
  <SelectInput
    sectionLabel="Amount Paid"
    componentName="amountPaid"
    selectLabels={selectLabels}
    {...props}
  />
);

export default AmountPaidInput;
