import React from "react";
import "./style.css";
function ResultCard({ hash, gas, carbon }) {
  return (
    <div className="card__cont">
      {/* <span className="blue">alert</span> */}
      <div id="main-divsi">
        <p>Ether Hash: </p>
        <code>{hash}</code>
        <p>Amount of Gas Emitted : {gas}</p>
        <p>Amount of CO2 Pollution : {carbon}</p>
      </div>
    </div>
  );
}

export default ResultCard;
