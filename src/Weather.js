import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <form className="search-city-form">
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="Enter a city here"
                    className="form-control"
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="search-button">
                    🔍
                  </button>
                  <button type="button" className="current-position-button">
                    📍
                  </button>
                </div>
              </div>
            </form>
            <br />
            <WeatherInfo data={weatherData} />
          </div>
        </div>
        <footer>
          <a href="https://github.com/giorgiag21/weather-react">
            Open-source code{" "}
          </a>
          by
          <a href="https://www.linkedin.com/in/g-galbiati/">
            {" "}
            Giorgia Galbiati
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "d81f820cfaf81e0086fca627dfb90697";
    let city = "Milan";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return "Loading...";
  }
}
