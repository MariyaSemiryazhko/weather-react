import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setResult(`It is 19°C in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="input-group city" id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          id="searchEngine"
          placeholder="Enter a city"
          aria-label="Recipient's username with two button addons"
          onChange={updateCity}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-outline-secondary search"
        />
      </form>
      <div className="weather-result">{result}</div>
    </div>
  );
}
