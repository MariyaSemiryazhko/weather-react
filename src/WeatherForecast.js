import React from "react";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }


    let city = (props.data.city);
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=21b0o158462fba6c2a0f6eca1t37c8ec&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="weather-forecast" id="forecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecastDay">Thu</div>
                    <img className=" img-fluid img-weather" src={props.data.icon} alt={props.data.description} />
                    <div className="WeatherForecastTemperatures">
                        <span className="WeatherForecastTemperatureMax">19°</span>
                        <span className="WeatherForecastTemperatureMin">10°</span>  
                    </div>    
                </div>
            </div>
        </div>
        
    )
}