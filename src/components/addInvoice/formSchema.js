import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  address: Yup.string(),
  phoneNumber: Yup.string(),
  amount: Yup.string(),
  date: Yup.string(),
  make: Yup.string(),
  model: Yup.string(),
  year: Yup.string(),
  color: Yup.string(),
  licensePlateNumber: Yup.string(),
  driversLicenseNumber: Yup.string(),
  driversLicenseState: Yup.string(),
  licensePlateState: Yup.string()
});

export default FormSchema;
