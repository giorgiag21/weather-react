import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="current-temp">{Math.round(props.celsius)}</span>
        <span className="units">
          <span className="active">°C</span> |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
        <br />

        <div className="current-max-min">
          <span className="current-max-temp">
            {Math.round(props.maxCelsius)}
          </span>
          °{" "}
          <span className="current-min-temp">
            {Math.round(props.minCelsius)}
          </span>
          °
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    let maxFahrenheit = (props.maxCelsius * 9) / 5 + 32;
    let minFahrenheit = (props.minCelsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="current-temp">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | <span className="active">°F</span>
        </span>
        <br />

        <div className="current-max-min">
          <span className="current-max-temp">{Math.round(maxFahrenheit)}</span>°{" "}
          <span className="current-min-temp">{Math.round(minFahrenheit)}</span>°
        </div>
      </div>
    );
  }
}
