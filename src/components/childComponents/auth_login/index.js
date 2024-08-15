import React from 'react';
import Vonage from '@vonage/server-sdk';

const AuthenticationLogin = ({ phoneNumber }) => {
  const vonage = new Vonage({
    apiKey: process.env.REACT_APP_VONAGE_API_KEY,
    apiSecret: process.env.REACT_APP_VONAGE_API_SECRET,
  });

  const handleVerify = async () => {
    try {
      const response = await vonage.verify.request({
        number: phoneNumber,
        brand: 'YourApp',
      });

      if (response && response.status === '0') {
        // Verification request successful
        console.log('Verification request sent!');
      } else {
        console.error('Failed to send verification request');
      }
    } catch (error) {
      console.error('Error sending verification request:', error);
    }
  };

  return (
    <div>
      <button onClick={handleVerify}>Send Verification</button>
    </div>
  );
};

export default AuthenticationLogin;
