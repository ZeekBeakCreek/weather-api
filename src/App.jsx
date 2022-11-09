import { useState, useEffect } from "react";
import countries from "i18n-iso-countries";

export default function App() {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("Arizona");
  const [state, setState] = useState("Arizona");

  // API KEY AND URL
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=905e02e7cd64a8efba4c139545869599`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return ((k - 273.15)*1.8 + 32).toFixed(2);
  };

  const date = new Date()

  return (
    <div className="main-container">
      <header className="main-header">
        <h2>React Weather App</h2>
      </header>

      <div className="form">
        <input
          type="text"
          id="location-name"
          onChange={inputHandler}
          value={getState}
        />
        <button className="search-button" type="submit" onClick={submitHandler}>
          Search
        </button>
      </div>

      <div className="info">
        {apiData.main ? (
          <div className="something">
            <h2 className="location">
              <i className="fas fa-street-view"></i>
              {apiData.name}
            </h2>
            <p id="date">
              {date.toLocaleDateString()} | {date.toLocaleTimeString()}
            </p>
            <h1 className="temp">{kelvinToFarenheit(apiData.main.temp)}°F</h1>
            <p className="min_max">
              Min {kelvinToFarenheit(apiData.main.temp_min)} °F | Max {kelvinToFarenheit(apiData.main.temp_max)} °F
            </p>
            <p className="min_max">
              Humidity: {apiData.main.humidity}% | Weather: {apiData.weather[0].main}
            </p>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}
