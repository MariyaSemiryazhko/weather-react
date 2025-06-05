import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import Temperatur from "./Temperatur";

function App() {
  return (
    <div className="container">
      <Search />
      <div className="today">
        <div className="container">
          <div className="row align-items-start">
            <div className="col">
              <p id="place">Munich</p>
              <div id="date">13.05</div>
              <Temperatur temperature={19} />
              <div>
                <img src="sunny.png" width="40%" id="icon" alt="clear" />
                <br />
              </div>
            </div>

            <div className="col-6">
              <div>
                Wind 💨: <span id="wind">31</span> km/h
              </div>
              <div>
                Humidity 💧: <span id="humidity">80</span> %
              </div>
              <div id="description">Rainy</div>
            </div>
          </div>
        </div>
      </div>

      <h5>Weather forecast for the next 5 days:</h5>
      <br />

      <div className="weather-forecast" id="forecast"></div>

      <footer>
        <a href="https://github.com/MariyaSemiryazhko/weather-react">
          Open source code
        </a>{" "}
        by Mariya Semiryazhko 
        <a href="https://genuine-begonia-c88d72.netlify.app/">on Netlify</a>
      </footer>
    </div>
  );
}

export default App;
