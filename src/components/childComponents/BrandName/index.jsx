import React from "react";
import Image from "../../../assets/images/image.png";
import "./style.scss";

const BrandName = ({ imageUrl, slogan, brandName }) => {
  return (
    <div className="logo-with-slogan">
      {imageUrl && <img src={Image} alt="Logo" className="logo-image" />}
      {brandName && <div className="brand-name">EazyPay</div>}
      {slogan && (
        <p className="slogan-text">
          Your Financial Partner for a Brighter Future
        </p>
      )}
    </div>
  );
};

export default BrandName;
