import React from "react";
import "./style.scss";

export default function ({ imageUrl, name, time, amount, id, icon }) {
  return (
    <div className="Transaction">
      <div className="info">
        {id && <div className="id">{id}</div>}


        {imageUrl && <img className="image" src={imageUrl} alt="" />}

        {icon && <ion-icon name={icon}></ion-icon>}

        <div className="details">
          <div className="name">{name}</div>
          <div className="time-and-method">
            <div className="time">{time}</div>
          
          </div>
        </div>
      </div>
      <div className="amount">$ {amount}</div>
    </div>
  );
}
