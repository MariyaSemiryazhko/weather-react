import React, { useState } from "react";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./WeatherForecast"
import axios from "axios";

export default function Search(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.city,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            icon: response.data.condition.icon_url,
            date: new Date(response.data.time *1000)
        });
    }

    function search() {
        const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=21b0o158462fba6c2a0f6eca1t37c8ec&units=metric`;
        axios.get(url).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="container">
                <form onSubmit={handleSubmit}
                    className="input-group city" id="form">
          <input
            type="text"
            className="form-control"
            id="searchEngine"
            placeholder="Enter a city..."
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="search" />
                </form>
            
                <WeatherInfo data={weatherData} /> 
                <WeatherForecast data={weatherData} />
            </div>
        );

    } else {
        search();
        return "Loading...";
    }
}





