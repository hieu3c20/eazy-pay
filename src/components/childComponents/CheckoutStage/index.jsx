import React from "react";
import "./style.scss";
import { useState } from "react";

const CheckoutStage = ({ user, amount }) => {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handlePayment = () => {
    console.log("Payment processed");
  };

  return (
    <div className="payment-step">
      <div className="payment-step__header">
        <h2>Payment</h2>
        <p>Confirm the details and proceed with the payment:</p>
      </div>

      <div className="payment-step__user-info">
        <img
          src={user.imageUrl}
          alt="User"
          className="payment-step__user-image"
        />
        <div>
          <p className="payment-step__user-name">{user.name}</p>
          <p className="payment-step__user-time">{user.time}</p>
        </div>
      </div>

      <div className="payment-step__amount">
        <p>Amount: ${amount}</p>
      </div>

      <div className="payment-step__form">

        <label className="payment-step__label" htmlFor="category">Category:</label>

        <input
          type="text"
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="payment-step__input"
        />

        <label className="payment-step__label" htmlFor="message">Message:</label>

        <textarea className="payment-step__textarea" id="message" value={message} onChange={handleMessageChange} />

        <button className="payment-step__button" onClick={handlePayment}>
          Proceed with Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutStage;
