import React from 'react';
import { Field } from 'formik';
import { Label, Input, FormFeedback } from 'reactstrap';

const BasicInput = ({
  componentName,
  label = '',
  type = 'text',
  error,
  touched,
  autoFocus = false,
  placeholder = ''
}) => (
  <>
    <Label for={componentName} style={{ fontSize: '2em' }}>
      {label}
    </Label>
    <Input
      autoFocus={autoFocus}
      type={type}
      name={componentName}
      tag={Field}
      invalid={error && touched}
      autoComplete="off"
      placeholder={placeholder}
      onKeyPress={e => {
        e.key === 'Enter' && e.preventDefault();
      }}
      style={{ fontSize: '2em' }}
    />
    <FormFeedback>{error}</FormFeedback>
  </>
);

export default BasicInput;
