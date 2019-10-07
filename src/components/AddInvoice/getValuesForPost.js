const getValuesForPost = values => {
  const {
    address,
    phoneNumber,
    amount,
    make,
    model,
    year,
    color,
    licensePlateNumber,
    driversLicenseNumber,
    driversLicenseState,
    licensePlateState
  } = values
  const valuesForPost = {
    address,
    phone_number: phoneNumber,
    amount,
    make,
    model,
    year,
    color,
    license_plate_number: licensePlateNumber,
    drivers_license_number: driversLicenseNumber,
    license_state: driversLicenseState,
    plate_state: licensePlateState,
    user_id: 1
  }
  return valuesForPost
}

export default getValuesForPost;