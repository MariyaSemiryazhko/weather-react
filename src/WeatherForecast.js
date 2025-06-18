import React, {useState} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";



export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }


    
    if (loaded) {
      
        return (
            <div className="weather-forecast" id="forecast">
            <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]}/>
                        
                </div>
            </div>
        </div>
    
        )
    } else {

        let city = (props.data.city);
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=21b0o158462fba6c2a0f6eca1t37c8ec&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
        return (
           null
        )
    }
}