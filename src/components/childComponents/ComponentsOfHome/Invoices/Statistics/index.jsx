import React from "react";
import "./style.scss";
import TextDisplaying from "../../../TextDisplaying";
import Graph from "../Graph";

const Statistics = () => {
  return (
    <div className="Statistic_title">
      <TextDisplaying
        textContent="Statistics"
        fontWeight="500"
        fontSize="25px"
      ></TextDisplaying>

      <div className="Statistic_header">
        <TextDisplaying textContent="Overview" margin="0 10px 0 0"></TextDisplaying>
        <TextDisplaying textContent="Income" margin="0 10px 0 0"></TextDisplaying>
        <TextDisplaying textContent="Spendings" margin="0 10px 0 0"></TextDisplaying>
        <TextDisplaying textContent="Savings"></TextDisplaying>
      </div>

      <Graph></Graph>
    </div>
  );
};

export default Statistics;
