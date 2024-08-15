import React from "react";
import "./style.scss";
import TextDisplaying from "../../../TextDisplaying";

const Tools = () => {
  return (
    <div>
      <div className="tools_header">
        <TextDisplaying textContent="Currency Converter" margin="0 10px 0 0"></TextDisplaying>
        <TextDisplaying textContent="Interest Calculator" margin="0 10px 0 0"></TextDisplaying>
        <TextDisplaying textContent="Bill Reminder" margin="0 10px 0 0"></TextDisplaying>
      </div>
 
      <div className="currency_converter">
        <div className="currency_from">
          <select id="currency_from" name="currency_from">
            <option value="usd">US Dollar (USD)</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="grape">Grape</option>
            <option value="orange">Orange</option>
          </select>

          <input type="text" id="amount" name="amount" placeholder="0.00" />
        </div>

        <div className="currency_to">
          <select id="currency_to" name="currency_to">
            <option value="vnd">VietNam dong (VND)</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="grape">Grape</option>
            <option value="orange">Orange</option>
          </select>

          <input type="text" id="result" name="result" placeholder="0.00" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
