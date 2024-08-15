import React from "react";
import { useState } from "react";
import "./style.scss";

const LoginFast = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");

  // const handleSendCode = async () => {
  //   try {
  //     const confirmationResult = await auth.signInWithPhoneNumber(phoneNumber);
  //     setVerificationId(confirmationResult.verificationId);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleVerifyCode = async () => {
  //   try {
  //     const credential = auth.PhoneAuthProvider.credential(verificationId, verificationCode);
  //     await auth.signInWithCredential(credential);
  //     // User is now logged in
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="phone-login">
      <h2 className="phone-login__title">Log in fast with a one-time code</h2>

      <p className="phone-login__description">
        Are you sure that{" "}
        {phoneNumber.replace(/(\d{4})(\d{2})(\d{4})/, "$1**$3")} is your phone
        number?
      </p>

      <button className="phone-login__button">Get a Code</button>

      <p className="phone-login__alternative">
        <a href="/login">Log in with a password instead</a>
      </p>
      <button className="phone-login__signup">Sign Up</button>
    </div>
  );
};

export default LoginFast;
