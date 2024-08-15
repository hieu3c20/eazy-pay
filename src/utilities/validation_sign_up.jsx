export const validate = (values, showCodeField) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneRegex = /^\d{10}$/;

  if (!values.code && showCodeField) {
    errors.code = "Code is required!";
  }

  if (!values.username) {
    errors.username = "Username is required!";
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters!";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters!";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required!";
  } else if (!phoneRegex.test(values.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number format. It should be 10 digits!";
  }

  return errors;
}