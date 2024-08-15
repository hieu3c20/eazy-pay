import React from 'react';

const RegistrationPopup = ({ isSuccess, onClose }) => {
  const popupClass = isSuccess ? 'registration-popup success' : 'registration-popup failure';

  return (
    <div className={popupClass}>
      <p>{isSuccess ? 'Registration Successful' : 'Registration Failed'}</p>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default RegistrationPopup;