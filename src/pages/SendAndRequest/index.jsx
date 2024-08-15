import React from "react";
import NavBar from "../../components/childComponents/NavBar";
import SubNav from "../../components/childComponents/SubNav";
import PaymentSending from "../../components/childComponents/PaymentSending";
import Footer from "../../components/childComponents/Footer";
import "./style.scss";

const SendAndRequest = () => {
  return (
    <div className="container_send_request">
      <SubNav />
      <PaymentSending />
      <Footer />
    </div>
  );
};

export default SendAndRequest;
