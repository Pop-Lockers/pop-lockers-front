import React from 'react';
import { Formik, Form } from 'formik';
import { FormGroup, Col, Button, Modal, ModalBody } from 'reactstrap';
import axios from 'axios';

import AddressInput from './AddressInput/AddressInput';
import PhoneNumberInput from './PhoneNumberInput/PhoneNumberInput';
import AmountInput from './AmountInput/AmountInput';
import MakeInput from './MakeInput/MakeInput';
import ModelInput from './ModelInput/ModelInput';
import YearInput from './YearInput/YearInput';
import ColorInput from './ColorInput/ColorInput';
import LicensePlateNumberInput from './LicensePlateNumberInput/LicensePlateNumberInput';
import DriversLicenseNumberInput from './DriversLicenseNumberInput/DriversLicenseNumberInput';
import LicensePlateStateInput from './LicensePlateStateInput/LicensePlateStateInput';
import DriversLicenseState from './DriversLicenseState/DriversLicenseState';

import formInitialValues from './formInitialValues';
import formSchema from './formSchema';
import getValuesForPost from './getValuesForPost'
import axiosConfig from './axiosConfig';
import Layout from '../Layout/Layout'

// 1) submits with localStorage user_id
// 2) push backend to my server

const AddInvoice = props => (
  <Layout>
      <Formik
        initialValues={formInitialValues}
        validationSchema={formSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const valuesForPost = getValuesForPost(values);
          try {
            await axios.post('http://localhost:5000/invoice/0', valuesForPost, axiosConfig)
          } catch (e) {
            console.log(e)
          }
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
  </Layout>
);

export default AddInvoice;
