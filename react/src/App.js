import "./App.css";
import React, { useState } from "react";

function App() {
  let [hash, setHash] = useState("");

  function fetchDetails(e) {
    e.preventDefault();
    let enteredHash = e.target[1].value;
    if (enteredHash === "0x5dcfa3136bf47ec85d6510672fc762d7a21dff3f") {
      console.log("Match");
      setHash("Match");
    }
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
      </div>
    </div>
  );
}

export default App;
