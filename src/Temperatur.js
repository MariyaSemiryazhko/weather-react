import React, { useState } from "react";

export default function Temperatur(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function changeToF(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function changeToC(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div>
      <span id="temp-change">{temperature}</span>
      <a href="/" id="cel-link" onClick={changeToC}>
        {" "}
        °C /
      </a>
      <a href="/" id="far-link" onClick={changeToF}>
        {" "}
        °F
      </a>
      <br />
    </div>
  );
}
