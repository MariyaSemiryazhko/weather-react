import React from "react";
import "./WeatherForecast.css";



export default function WeatherForecast(props){
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