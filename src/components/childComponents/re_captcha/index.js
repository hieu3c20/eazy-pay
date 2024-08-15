import React, { useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCAPTCHAWidget = ({ onVerify }) => {
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const loadReCAPTCHA = () => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadReCAPTCHA();

    return () => {
      const script = document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleReCAPTCHAVerify = (response) => {
    onVerify(response);
  };

  return <ReCAPTCHA ref={recaptchaRef} sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleReCAPTCHAVerify} />;
};

export default ReCAPTCHAWidget;