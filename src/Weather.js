import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Milan",
    country: "IT",
    temperature: 6,
    maxTemperature: 10,
    minTemperature: 4,
    date: "Wednesday, 15:09",
    description: "Clear Sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 0,
    wind: 0,
  };
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
          <h1>
            <span className="current-city">{weatherData.city}</span>,
            <span className="country"> {weatherData.country}</span>
          </h1>
          <div className="last-update">
            <h6>Last updated: {weatherData.date}</h6>
          </div>
          <br />
          <div className="row">
            <div className="col-6 left-column">
              <h6>{weatherData.description}</h6>

              <div>
                <h6>Humidity: {weatherData.humidity}%</h6>
              </div>

              <div>
                <h6>Wind: {weatherData.wind} km/h</h6>
              </div>
            </div>

            <div className="col-6 right-column">
              <div className="current-weather">
                <img src={weatherData.imgUrl} alt="" className="icon" />
                <span className="current-temp">{weatherData.temperature}</span>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
                <br />

                <div className="current-max-min">
                  <span className="current-max-temp">
                    {weatherData.maxTemperature}
                  </span>
                  °{" "}
                  <span className="current-min-temp">
                    {weatherData.minTemperature}
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
        <a href="https://github.com/giorgiagit21/weather-app">
          Open-source code{" "}
        </a>
        by
        <a href="https://www.linkedin.com/in/g-galbiati/"> Giorgia Galbiati</a>
      </footer>
    </div>
  );
}
