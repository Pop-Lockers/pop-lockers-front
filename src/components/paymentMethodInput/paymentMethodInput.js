import React from 'react';
import SelectInput from '../selectInput/selectInput';

const selectLabels = ['Cash', 'Credit card', 'Member', 'Prepaid', 'Other'];

const PaymentMethodInput = props => (
  <SelectInput
    sectionLabel="Payment Method"
    componentName="paymentMethod"
    selectLabels={selectLabels}
    {...props}
  />
);

export default PaymentMethodInput;
