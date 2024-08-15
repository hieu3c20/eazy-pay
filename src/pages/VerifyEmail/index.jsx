import React from "react";
import "./style.scss";
import { useState } from "react";

const VerifyEmail = () => {


  return (
    <form className="container_verify">
      <h2>Verify your email address</h2>
      <p>
        Please click the button below to confirm your email address and activate
        your account.
      </p>

      <button className="button" type="submit">Confirm Email</button>

      <p className="notice">
        If you received this in error, simply ignore this email and do not click
        the button.
      </p>
    </form>
  );
};

export default VerifyEmail;
