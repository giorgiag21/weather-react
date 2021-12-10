import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
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

  function search() {
    const apiKey = "d81f820cfaf81e0086fca627dfb90697";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <form className="search-city-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="Enter a city here"
                    className="form-control"
                    onChange={updateCity}
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
    search();
    return "Loading...";
  }
}
