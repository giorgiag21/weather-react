import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    console.log(response.data);
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
            <h1 className="current-city">
              {weatherData.city}, {weatherData.country}
            </h1>
            <div className="last-update">
              <h6>
                Last updated: <FormattedDate date={weatherData.date} />{" "}
              </h6>
            </div>
            <br />
            <div className="row">
              <div className="col-6 left-column">
                <h6 className="text-capitalize">{weatherData.description}</h6>

                <div>
                  <h6>Humidity: {weatherData.humidity}%</h6>
                </div>

                <div>
                  <h6>Wind: {weatherData.wind}km/h</h6>
                </div>
              </div>

              <div className="col-6 right-column">
                <div className="current-weather">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt=""
                    className="icon"
                  />
                  <span className="current-temp">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="units">
                    <a href="/" className="active">
                      °C
                    </a>{" "}
                    |<a href="/">°F</a>
                  </span>
                  <br />

                  <div className="current-max-min">
                    <span className="current-max-temp">
                      {Math.round(weatherData.maxTemperature)}
                    </span>
                    °{" "}
                    <span className="current-min-temp">
                      {Math.round(weatherData.minTemperature)}
                    </span>
                    °
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="weather-forecast"></div>
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
