import React from 'react';
import { Formik, Form } from 'formik';
import { FormGroup, Col, Button, Modal, ModalBody } from 'reactstrap';
import NameInput from './nameInput/nameInput';
import EmailInput from './emailInput/emailInput';
import HeardAboutUsInput from './heardAboutUsInput/heardAboutUsInput';
import AmountPaidInput from './amountPaidInput/amountPaidInput';
import PaymentMethodInput from './paymentMethodInput/paymentMethodInput';

const AddInvoice = props => (
  <Formik
    initialValues={props.initialValues}
    validationSchema={props.validationSchema}
    onSubmit={props.onSubmit}
  >
    {({ values, errors, touched, isSubmitting }) => (
      <Form>
        <FormGroup>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <input type="hidden" value="for disrupting autocomplete" />
            <Modal isOpen={props.successModal} centered={true}>
              <ModalBody style={{ fontSize: '3em', textAlign: 'center' }}>
                Ok!
              </ModalBody>
            </Modal>
            <NameInput error={errors.name} touched={touched.name} />
            <br />
            <EmailInput error={errors.email} touched={touched.email} />
            <br />
            <HeardAboutUsInput value={values.heardAboutUs} />
            <br />
            <AmountPaidInput value={values.amountPaid} />
            <br />
            <PaymentMethodInput value={values.paymentMethod} />
            <br />
            <Col md={{ size: 1, offset: 9 }}>
              <Button
                type="submit"
                style={{ backgroundColor: 'rebeccapurple', fontSize: '2em' }}
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
