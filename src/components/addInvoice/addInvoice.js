import React from 'react';
import { Formik, Form } from 'formik';
import { FormGroup, Col, Button, Modal, ModalBody } from 'reactstrap';
import AddressInput from './addressInput/addressInput';
import PhoneNumberInput from './phoneNumberInput/phoneNumberInput';
import AmountInput from './amountInput/amountInput';
import DateInput from './dateInput/dateInput';
import MakeInput from './makeInput/makeInput';
import ModelInput from './modelInput/modelInput';
import YearInput from './yearInput/yearInput';
import ColorInput from './colorInput/colorInput';
import LicensePlateNumberInput from './licensePlateNumberInput/licensePlateNumberInput';
import DriversLicenseNumberInput from './driversLicenseNumberInput/driversLicenseNumberInput';
import LicensePlateStateInput from './licensePlateStateInput/licensePlateStateInput';
import DriversLicenseState from './driversLicenseState/driversLicenseState';

import formInitialValues from './formInitialValues';
import formSchema from './formSchema';

const AddInvoice = props => (
  <Formik
    initialValues={formInitialValues}
    validationSchema={formSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      console.log(values);
      resetForm(formInitialValues);
      setSubmitting(false);
    }}
  >
    {({ values, errors, touched, isSubmitting }) => (
      <Form>
        <FormGroup>
          <Col xs="12" sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
            <input type="hidden" value="for disrupting autocomplete" />
            <Modal isOpen={props.successModal} centered={true}>
              <ModalBody style={{ fontSize: '3em', textAlign: 'center' }}>
                Ok!
              </ModalBody>
            </Modal>
            <br />
            <AddressInput error={errors.address} touched={touched.address} />
            <br />
            <PhoneNumberInput error={errors.phoneNumber} touched={touched.phoneNumber} />
            <br />
            <AmountInput value={values.amount} touched={touched.amount} />
            <br />
            <DateInput value={values.date} touched={touched.date} />
            <br />
            <MakeInput value={values.make} touched={touched.make} />
            <br/>
            <ModelInput value={values.model} touched={touched.model} />
            <br/>
            <YearInput value={values.year} touched={touched.year} />
            <br/>
            <ColorInput value={values.color} touched={touched.color} />
            <br/>
            <LicensePlateNumberInput value={values.licensePlateNumber} touched={touched.licensePlateNumber} />
            <br/>
            <DriversLicenseNumberInput value={values.driversLicenseNumber} touched={touched.driversLicenseNumber} />
            <br/>
            <DriversLicenseState value={values.driversLicenseState} touched={touched.driversLicenseState} />
            <br/>
            <LicensePlateStateInput value={values.licensePlateState} touched={touched.licensePlateState} />
            <br/>
            <Col>
              <Button
                type="submit"
                style={{ backgroundColor: 'rebeccapurple' }}
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Col>
          </Col>
        </FormGroup>
      </Form>
    )}
  </Formik>
);

export default AddInvoice;
