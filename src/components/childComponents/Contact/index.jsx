import React from "react";
import './style.scss'

export default function ({ imageUrl, name }) {
  return (
    <div className="Contact">
      <img className="image" src={imageUrl} alt="" />
      <p className="name">{name}</p>
    </div>
  );
};

