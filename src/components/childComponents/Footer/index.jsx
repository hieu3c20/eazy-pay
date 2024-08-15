import React from "react";
import BrandName from "../BrandName";
import "./style.scss";

const Footer = () => {
  return (
  
      <footer>
        <div className="footer-content">
          <img src="logo.png" className="footer_image" alt="" />

          <span>Help</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    
  );
};

export default Footer;
