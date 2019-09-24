import React from 'react';
import BasicInput from '../basicInput/basicInput';

const EmailInput = props => (
  <BasicInput componentName="email" label="Email" type="text" {...props} />
);

export default EmailInput;
