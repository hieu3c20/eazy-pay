import React, { useEffect, useState } from "react";
import "./style.scss";
import RegistrationTimeline from "../registration_time_line";
import { useNavigate } from "react-router-dom";

const SignUpField = ({
  formValues,
  handleChange,
  formErrors,
  isSubmit,
  handleSubmit,
  handleBack,
}) => {

  {formValues.step === 3 && (
    <>
      {/* Step 3: Verify Phone Number */}
      <div className="field">
        <label className="field-label">
          Verification Code To {formValues.phoneNumber}
        </label>
        <input
          type="text"
          name="code"
          placeholder="Verification Code"
          value={formValues.code}
          onChange={handleChange}
        />
      </div>
      <p
        className={`error-message ${
          isSubmit && formErrors.code ? "show" : ""
        }`}
      >
        {formErrors.code}
      </p>

      {timer <= 0 ? (
        <button
          type="button"
          className="button"
          onClick={handleResendCode}
          disabled={isTimerRunning}
        >
          Send OTP
        </button>
      ) : (
        <>
          <p className="countdown_specification">
            Resend code in {timer} seconds
          </p>
          <button
            type="button"
            className="button"
            onClick={handleResendCode}
            disabled={isTimerRunning}
          >
            Send OTP
          </button>
        </>
      )}

      <div className="form-navigation">
        <button type="button" className="button" onClick={handleBack}>
          Back
        </button>
        <button type="submit" className="button">
          Verify Email
        </button>
      </div>
    </>
  )}

  {formValues.step === 4 && (
    <>
      <div className="field">
        <label className="field-label">
          Verification Code To {formValues.email.slice(0, 10)}...
        </label>
        <input
          type="text"
          name="code"
          placeholder="Verification Code"
          value={formValues.code}
          onChange={handleChange}
        />
      </div>
      <p
        className={`error-message ${
          isSubmit && formErrors.code ? "show" : ""
        }`}
      >
        {formErrors.code}
      </p>

      {emailTimer <= 0 ? (
        <button
          type="button"
          className="button"
          onClick={handleResendCode}
          disabled={isEmailTimerRunning}
        >
          Send Code
        </button>
      ) : (
        <>
          <p className="countdown_specification">
            Resend code in {emailTimer} seconds
          </p>
          <button
            type="button"
            className="button"
            onClick={handleResendCode}
            disabled={isEmailTimerRunning}
          >
            Send Code
          </button>
        </>
      )}
      <div className="form-navigation">
        <button type="button" className="button" onClick={handleBack}>
          Back
        </button>
        <button type="submit" className="button">
          Submit register
        </button>
      </div>
    </>
  )} 

  const registrationSteps = [1, 2, 3, 4];
  const [timer, setTimer] = useState(60);
  const [emailTimer, setEmailTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isEmailTimerRunning, setIsEmailTimerRunning] = useState(false);

  const navigate = useNavigate();

  const startTimer = (setCountdown) => {
    setIsTimerRunning(true);
    setIsEmailTimerRunning(true);
    let interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return interval;
  };

  useEffect(() => {
    let countdownInterval = null;

    if (isTimerRunning && timer > 0) {
      countdownInterval = startTimer(setTimer);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isTimerRunning, timer]);

  useEffect(() => {
    let emailCountdownInterval = null;

    if (isEmailTimerRunning && emailTimer > 0) {
      emailCountdownInterval = startTimer(setEmailTimer);
    }

    return () => {
      clearInterval(emailCountdownInterval);
    };
  }, [isEmailTimerRunning, emailTimer]);

  const handleResendCode = () => {
    if (formValues.step === 3) {
      setIsTimerRunning(true);
      setTimer(60);
    } else if (formValues.step === 4) {
      setIsEmailTimerRunning(true);
      setEmailTimer(60);
    }
  };

  const handleVerifyCode = () => {
    navigate("/sign_up/verify-email");
  }

  return (
    <form onSubmit={handleSubmit} className="container_form">
      <h1 className="container-title">Account Registration</h1>

      <RegistrationTimeline
        registrationSteps={registrationSteps}
        formValues={formValues}
      />

      <div className="form">
        {formValues.step === 1 && (
          <>
            <div className="field">
              <label className="field-label">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.username ? "show" : ""
              }`}
            >
              {formErrors.username}
            </p>

            <div className="field">
              <label className="field-label">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.email ? "show" : ""
              }`}
            >
              {formErrors.email}
            </p>

            <div className="field">
              <label className="field-label">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.phoneNumber ? "show" : ""
              }`}
            >
              {formErrors.phoneNumber}
            </p>

            <div className="field">
              <label className="field-label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.password ? "show" : ""
              }`}
            >
              {formErrors.password}
            </p>

            <button className="button">Next step</button>
          </>
        )}

        {formValues.step === 2 && (
          <>
            <div className="field">
              <label className="field-label">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
                value={formValues.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.dateOfBirth ? "show" : ""
              }`}
            >
              {formErrors.dateOfBirth}
            </p>

            <div className="field">
              <label className="field-label">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formValues.address}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.address ? "show" : ""
              }`}
            >
              {formErrors.address}
            </p>

            <div className="field">
              <label className="field-label">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formValues.city}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.city ? "show" : ""
              }`}
            >
              {formErrors.city}
            </p>

            <div className="field">
              <label className="field-label">State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formValues.state}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.state ? "show" : ""
              }`}
            >
              {formErrors.state}
            </p>

            <div className="field">
              <label className="field-label">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formValues.country}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.country ? "show" : ""
              }`}
            >
              {formErrors.country}
            </p>

            <div className="field">
              <label className="field-label">Zipcode</label>
              <input
                type="text"
                name="zipcode"
                placeholder="Zipcode"
                value={formValues.zipcode}
                onChange={handleChange}
              />
            </div>
            <p
              className={`error-message ${
                isSubmit && formErrors.zipcode ? "show" : ""
              }`}
            >
              {formErrors.zipcode}
            </p>

            <div className="form-navigation">
              <button
                type="button"
                className="button button-back"
                onClick={handleBack}
              >
                Back
              </button>
              <button onClick={handleVerifyCode} type="submit" className="button">
                Verify step
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default SignUpField;
