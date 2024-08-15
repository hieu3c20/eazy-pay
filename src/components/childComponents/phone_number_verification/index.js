import React from 'react';

const PhoneNumberVerificationModal = ({ isOpen, onClose, onSubmit, handleChange, code }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Verify Phone Number</h2>
        <p>Enter the verification code sent to your phone number.</p>
        <input
          type="text"
          name="code"
          placeholder="Verification Code"
          value={code}
          onChange={handleChange}
        />
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PhoneNumberVerificationModal;