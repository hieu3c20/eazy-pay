import React from "react";
import SearchInput from "../SearchInput";
import BoxFiltering from "../BoxFiltering";
import OtherPaymentSendingRequest from "../OtherPaymentSendingMethod";
import OtherPaymentSendingMethod from "../OtherPaymentSendingMethod";
import "./style.scss";

const PaymentSending = () => {
  return (
    <div className="payment_sending_container">
      <div>
        <div className="payment_sending_title">Send Payment to</div>
        <div className="payment_sending_left">
          <SearchInput />

          <BoxFiltering selectedOption={true} text="next" />
        </div>
      </div>

      <div className="payment_sending_right">
        <OtherPaymentSendingMethod />
      </div>
    </div>
  );
};

export default PaymentSending;
