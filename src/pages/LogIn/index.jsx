import { React, useState, useEffect } from "react";
import Home from "../Home/index";
import "./style.scss";
import BrandName from "../../components/childComponents/BrandName";
// import ReCAPTCHAWidget from '../../child_components/re_captcha';
import axios from "axios";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleReCAPTCHAVerify = (response) => {
  //   // Handle reCAPTCHA verification here
  //   console.log('reCAPTCHA verified:', response);
  //   setIsCaptchaVerified(true);
  // };

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

    // if (!isCaptchaVerified) {
    //   setError('Please verify that you are not a robot.');
    //   return;
    // }

    const loginData = {
      username: username,
      password: password,
    };

    const ipAddress = await getIpAddress();

    console.log("Username:", username);

    try {
      const response = await axios.post(
        "https://incandescent-scale-production.up.railway.app/api/v1/auth/login",
        loginData
      );
      // Handle the response from the API
      console.log("Login successful:", response.data);

      setUsername("");
      setPassword("");
      setError("");
      setRedirectToHome(true);
    } catch (error) {
      // Handle the error from the API
      console.error("Login failed:", error);
      setError("Invalid username or password");
    }

    console.log("Device Information:");
    console.log("User Agent:", navigator.userAgent);

    console.log("Language:", navigator.language);
    console.log("Cookie Enabled:", navigator.cookieEnabled);
    console.log("IP Address:", ipAddress);
  };

  const handleSignUp = () => {
    setRedirectToSignUp(true);
  };

  useEffect(() => {
    if (redirectToHome) {
      window.location.href = "/";
    }
  }, [redirectToHome]);

  useEffect(() => {
    if (redirectToSignUp) {
      window.location.href = "/sign_up";
    }
  }, [redirectToSignUp]);

  return (
    <div className="login-page">
      <BrandName
        imageUrl="image.png"
      />

      {redirectToHome ? (
        <Home />
      ) : (
        <div className="login-container">

          <button className="login-title">Login</button>

          <button className="register-title">Register</button>

          <div className="form-group-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="field-label">Username</label>
                <input
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>

              <div className="form-group">
                <label className="field-label">Password</label>
                <div className="password-input">
                  <input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              {/* <div className="form-group">
              <ReCAPTCHAWidget onVerify={handleReCAPTCHAVerify} />
            </div> */}
              {error && (
                <div className={`error-message ${error ? "show" : ""}`}>
                  {error}
                </div>
              )}
              <button type="submit" className="button btn-login">
                Login
              </button>
            </form>

            <button
              type="submit"
              className="button btn-login"
              onClick={handleSignUp}
            >
              You haven't an account ? Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
