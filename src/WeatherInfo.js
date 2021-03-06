import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="current-city">
        {props.data.city}, {props.data.country}
      </h1>
      <div className="last-update">
        <h6>
          Last updated: <FormattedDate date={props.data.date} />{" "}
        </h6>
      </div>
      <br />
      <div className="row">
        <div className="col left-column">
          <h6 className="text-capitalize">{props.data.description}</h6>

          <div>
            <h6>Humidity: {props.data.humidity}%</h6>
          </div>

          <div>
            <h6>Wind: {Math.round(props.data.wind)} km/h</h6>
          </div>
        </div>

        <div className="col center-column">
          <div className="current-weather-icon">
            <WeatherIcon code={props.data.icon} size={64} />
          </div>
        </div>

        <div className="col right-column">
          <div className="current-weather">
            <WeatherTemperature
              celsius={props.data.temperature}
              maxCelsius={props.data.maxTemperature}
              minCelsius={props.data.minTemperature}
            />
          </div>
        </div>
      </div>

      <br />
      <WeatherForecast coordinates={props.data.coordinates} />
    </div>
  );
}
