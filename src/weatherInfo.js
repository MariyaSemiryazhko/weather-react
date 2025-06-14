import React from "react";
import FormattedDate from "./formattedDate";

export default function weatherInfo(props) {
    return (<div className="weatherInfo">
         <div className="today">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col">
                                <p id="place">{props.data.city} </p>
                                <div id="date">
                                    <FormattedDate date={props.data.date}/>
                                </div>
                                 
                                <div>Temperature🌡️: {Math.round(props.data.temperature)}°C</div>
                                <div>
                                    Wind💨: <span id="wind">{props.data.wind}</span> km/h
                                </div>
                                <div>
                                    Humidity💧: <span id="humidity">{props.data.humidity}</span> %
                                </div>
                                <div id="description" className="text-capitalize">{props.data.description}</div>
                                
                            </div>
            
                            <div className="col-6">
                            <div>
                                    <img   className=" img-fluid img-weather" src={props.data.icon} alt={props.data.description} />
                            
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="weather-forecast" id="forecast"></div>
                
    </div>);
}