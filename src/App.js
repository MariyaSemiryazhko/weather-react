import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Search defaultCity="New York" />
    <footer>
      <a href="https://github.com/MariyaSemiryazhko/weather-react" target="_blank" rel="noopener noreferrer" >
          Open source code
      </a>{" "}
      by Mariya Semiryazhko
      <a href="https://genuine-begonia-c88d72.netlify.app/" target="_blank" rel="noopener noreferrer" > on Netlify</a>
    </footer>
    </div>
    </div>
  )
  
}


