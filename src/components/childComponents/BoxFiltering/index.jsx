import React from "react";
import "./style.scss";

const BoxFiltering = ({ selectedOption, text }) => {
  return (
    <div className="filter-box">
      <p
        className={`filter-item ${
          selectedOption === true ? "filter-item-selected" : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default BoxFiltering;
