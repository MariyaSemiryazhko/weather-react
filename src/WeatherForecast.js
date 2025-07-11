import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";



export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    useEffect(() => {
        setLoaded(false);
    }, [props.data.city]);


    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {  
        return (
            <div className="weather-forecast" id="forecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}        
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