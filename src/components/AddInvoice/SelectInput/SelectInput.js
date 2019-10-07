import React from 'react';
import { Field } from 'formik';
import { Input, Label } from 'reactstrap';
import Select from './select';
import BasicInput from '../BasicInput/BasicInput';

const SelectInput = ({ value, sectionLabel, selectLabels, componentName }) => (
  <>
    <Label for={componentName}>
      {sectionLabel}
    </Label>
    <br />
    <Input
      tag={Field}
      component="select"
      name={componentName}
    >
      <option value="">Please select</option>
      {selectLabels.map((label, index) => (
        <Select label={label} key={index} />
      ))}
    </Input>
    {value === 'Other' && (
      <BasicInput
        componentName={`other.${componentName}`}
        placeholder="Please tell us more..."
        autoFocus={true}
      />
    )}
  </>
);

export default SelectInput;
