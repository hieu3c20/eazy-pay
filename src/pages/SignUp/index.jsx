import { React, useState, useEffect } from "react";
import "./style.scss";
import BrandName from "../../components/childComponents/BrandName";
import SignUpField from "../../components/childComponents/sign_up_field";
import axios from "axios";

const SignUp = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    code: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    step: 1,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));

    if (isSubmit) {
      // setFormErrors(validate({ ...formValues, [name]: value }));
    }
  };

  const getIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      return response.data.ip;
    } catch (error) {
      console.error("Error fetching IP address:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    setIsSubmit(true);

    const ipAddress = await getIpAddress();

    if (Object.keys(formErrors).length === 0) {
      if (
        formValues.step === 1 &&
        formValues.username &&
        formValues.password &&
        formValues.phoneNumber &&
        formValues.email
      ) {
        setFormValues((prevValues) => ({
          ...prevValues,
          step: 2,
        }));
      } else if (formValues.step === 2) {
        setFormValues((prevValues) => ({
          ...prevValues,
          step: 3,
        }));
      } else if (formValues.step === 3) {
        setFormValues((prevValues) => ({
          ...prevValues,
          step: 4,
        }));
      } else if (formValues.step === 4) {
        const usernameParts = formValues.username.split(" ");
        const firstName = usernameParts[0] || "";
        const lastName = usernameParts.slice(1).join(" ") || "";

        const registrationData = {
          email: formValues.email,
          phone: formValues.phoneNumber,
          password: formValues.password,
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: formValues.dateOfBirth,
          address: {
            address: formValues.address,
            city: formValues.city,
            country: formValues.country,
            zipCode: formValues.zipcode,
          },
          deviceRequest: {
            userAgent: navigator.userAgent,
            ipAddress: ipAddress,
          },
        };

        try {
          const response = await axios.post(
            "https://incandescent-scale-production.up.railway.app/api/v1/auth/register",
            registrationData
          );
          console.log("Registration successful:", response.data);
        } catch (error) {
          console.error("Registration failed:", error);
        }
      }
    }
  };

  const handleRedirect = () => {
    window.location.href = "/login";
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  const handleBack = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      step: 1,
    }));
  };

  return (
    <div className="container">
      <BrandName
        imageUrl="logo.png"
        slogan="Your Financial Partner for a Brighter Future"
        brandName="EazyPay"
      />

      <div className="right-side-container">
        <SignUpField
          formValues={formValues}
          handleChange={handleChange}
          formErrors={formErrors}
          isSubmit={isSubmit}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
        <button className="button" onClick={handleRedirect}>
          You already have an account? Login now
        </button>
      </div>
    </div>
  );
};

export default SignUp;
