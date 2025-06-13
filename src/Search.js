import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.city,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            icon: response.data.condition.icon_url,
            date: "Thursday, 13.05"
        });
    }

    if (weatherData.ready) {
        return (
            <div className="container">
              <form className="input-group city" id="form">
          <input
            type="text"
            className="form-control"
            id="searchEngine"
            placeholder="Enter a city..."
          />
          <input type="submit" value="Search" className="search" />
        </form>


                <div className="today">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col">
                                <p id="place">{weatherData.city} </p>
                                <div id="date">{weatherData.date}</div>
                                 
                                <div>Temperature🌡️: {Math.round(weatherData.temperature)}°C</div>
                                <div>
                                    Wind💨: <span id="wind">{weatherData.wind}</span> km/h
                                </div>
                                <div>
                                    Humidity💧: <span id="humidity">{weatherData.humidity}</span> %
                                </div>
                                <div id="description" className="text-capitalize">{weatherData.description}</div>
                                
                            </div>
            
                            <div className="col-6">
                            <div>
                                    <img   className=" img-fluid img-weather" src={weatherData.icon} alt={weatherData.description} />
                            
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="weather-forecast" id="forecast"></div>
                
            </div>
        );

    } else {
        const url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=21b0o158462fba6c2a0f6eca1t37c8ec&units=metric`;
        axios.get(url).then(handleResponse);
    }
}





