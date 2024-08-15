import React from "react";
import "./style.scss";

const Account = ({
  imageUrl,
  name,
  time,
  method,
  amount,
  phoneNumber,
  onClick,
}) => {
  return (
    <div className="Transaction" onClick={onClick}>
      <div className="info">
        <img className="image" src={imageUrl} alt="" />

        <div className="details">
          <div className="name">{name}</div>

          {phoneNumber && <div className="phone">{phoneNumber}</div>}
          {time && method && (
            <div className="time-and-method">
              {time && <div className="time">{time}</div>}
              {method && <div className="Method">{method}</div>}
            </div>
          )}
        </div>
      </div>
      {amount && <div className="amount">$ {amount}</div>}
    </div>
  );
};

export default Account;
