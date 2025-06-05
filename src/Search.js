import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!city) return;

    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=21b0o158462fba6c2a0f6eca1t37c8ec&units=metric`;
    axios.get(url).then((response) => {
      setWeatherData({
        city: city,
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon_url,
      });
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  const weatherItems = weatherData
    ? [
        {
          label: "Temperature",
          value: `${Math.round(weatherData.temperature)}°C`,
        },
        { label: "Humidity", value: `${weatherData.humidity}%` },
        { label: "Description", value: weatherData.description },
        { label: "Wind", value: `${weatherData.wind} km/h` },
      ]
    : [];

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
        <input type="submit" value="Search"  className=" search"/>
      </form>

      {weatherData && (
        <div>
          <h1>Weather in {weatherData.city}</h1>
          <ul>
            {weatherItems.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
          <img src={weatherData.icon} alt={weatherData.description} />
        </div>
      )}
    </div>
  );
}
