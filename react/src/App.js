import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function App() {
  let [hash, setHash] = useState("Null");
  let [gas, setGas] = useState("Null");
  let [carbon, setCarbon] = useState("Null");

  function fetchDetails(e) {
    e.preventDefault();
    let enteredHash = e.target[1].value;
    let example = "";

    let url = "https://wowexi8001.pythonanywhere.com/api/Apis/";
    axios.get(url).then((res) => {
      if (enteredHash === "0x5dcfa3136bf47ec85d6510672fc762d7a21dff3f") {
        setHash(res.data[0].Address);
        setGas(res.data[0].gas_emitted);
        console.log(res.data[0]);
        setCarbon(res.data[0].co2_emitted);
        console.log(enteredHash);
      } else if (enteredHash === "0xe2093ba0ffec4a1513a854faa837394c33d9f1c0") {
        setHash(res.data[2].Address);
        setGas(res.data[2].gas_emitted);
        console.log(res.data[2].Gas);
        setCarbon(res.data[2].co2_emitted);
      } else if (enteredHash === "0xa8ac2b7148e3f60492d48d63d10a0e8469b3fbde") {
        setHash(res.data[4].Address);
        setGas(res.data[4].gas_emitted);
        setCarbon(res.data[4].co2_emitted);
        // console.log(res.data[4].Address);
      }
    });
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <h2>Hello World</h2>
      </header> */}
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Calculate your Carbon FootPrint
            <small>Please Enter The Below Details</small>
          </h2>
        </div>
        <form className="card-form" onSubmit={fetchDetails}>
          <div className="input">
            <input
              type="text"
              className="input-field"
              id="eth-input"
              required
              disabled
            />
            <label className="input-label" id="eth-name">
              ETH
            </label>
          </div>
          <div className="input">
            <input type="text" className="input-field" required />
            <label className="input-label">Ethereum Address</label>
          </div>
          {/* <div className="input">
            <input type="password" className="input-field" required />
            <label className="input-label">Password</label>
          </div> */}
          <div id="submit-btn-container" className="action">
            <button id="submit-btn" className="action-button">
              Submit
            </button>
          </div>
        </form>

        <br />
        <br />
        <div className="card__cont">
          {/* <span className="blue">alert</span> */}
          <div id="main-divsi">
            <p>Ether Hash: </p>
            <code>{hash}</code>
            <p>Amount of Gas Emitted : {gas}</p>
            <p>Amount of CO2 Pollution : {carbon} KGS</p>
            <p>
              Enter This ETH Code: 0xa8ac2b7148e3f60492d48d63d10a0e8469b3fbde
            </p>
            <br />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
