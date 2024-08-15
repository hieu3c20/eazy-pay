// RegistrationTimeline.js

import React from 'react';
import './style.scss';

const RegistrationTimeline = ({ registrationSteps, formValues }) => {
  return (
    <div className="registration-timeline">

      <div className="registration-specification">Your current step to get an account:  </div>

      {registrationSteps.map((step) => (
        <div
          key={step}
          className={`registration-step ${formValues.step === step ? 'active' : ''}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default RegistrationTimeline;
