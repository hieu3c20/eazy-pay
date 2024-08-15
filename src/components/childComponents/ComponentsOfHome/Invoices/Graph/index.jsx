import React from "react";
import "./style.scss";

const Graph = () => {
  return (
    <div className="graph">
      <div className="relative_bar">
        
        <div className="total_income_bar">
          <div className="total_income"></div>
        </div>

        <div className="balance_bar">
          <div className="text_bar total_income_text">total income</div>
          <div className="text_bar balance_text">balance</div>
          <div className="balance"></div>
        </div>
      </div>

      <div className="total_expenses_bar">
        <div className="text_bar total_expenses_text">total expenses</div>
        <div className="total_expenses"></div>
      </div>

      <div className="total_savings_bar">
        <div className="text_bar total_savings_text">total savings</div>
        <div className="total_savings"></div>
      </div>
    </div>
  );
};

export default Graph;
