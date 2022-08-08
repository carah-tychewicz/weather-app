import { useEffect, useState } from "react";
import { url } from '../config.js';
import LocaleDetails from "./LocaleDetails.jsx";
import './CurrentWeather.css';
<<<<<<< HEAD
import LoadingText from "./LoadingText.jsx";
=======
import VisualWeather from "./VisualWeather.jsx";
>>>>>>> cde1a9f722354ce058d990d60e8b2b480f7db12a

const CurrentWeather = () => {
  const [forecast, setForecast] = useState('')

  useEffect(() => {
    

    const getWeather = async () => {
      try {
        const response = await fetch(url);
        const currentWeather = await response.json();
        setForecast(currentWeather);
      } catch(err) {
        console.log("ya dun goofed", err)
      }
    }
    setTimeout(() => {
      getWeather();
    }, 3000)
  }, []);

  const toFahrenheit = (kel) => {
    const fahrenheit = (kel - 273.15) * 9 / 5 + 32;
    const fRounded = fahrenheit.toFixed(0);
    return fRounded;
  }
  
  let tempsFahrenheit = {};

  const tempConverter = (tempArr) => {
    Object.entries(tempArr).forEach(([key, value]) => {
      tempsFahrenheit[key] = toFahrenheit(value);
    })
  }

  const tempsKelvin = forecast ? 
  {
    currentTemp: forecast.main.temp, 
    feelsLike: forecast.main.feels_like, 
    minTemp: forecast.main.temp_min, 
    maxTemp: forecast.main.temp_max
  } : {};
  
  tempConverter(tempsKelvin);

  return (
    <div className="container">
      {
        !forecast ? 
          // componentize this asap
          <LoadingText /> :
          // also component
          <div className="weather-card">
            <div className="title">
              <h2>Today's Forecast</h2>
            </div>
            <div className="weather-forecast">
              <LocaleDetails location={forecast.name} />
              <div className="current-temperature">
                <p className="temperature">{tempsFahrenheit.currentTemp}°</p>
                <p className="descriptor">{forecast.weather[0].main}</p>
              </div>
              <div className="other-details">
                <p className="feels">Feels like {tempsFahrenheit.feelsLike}°</p>
                <p className="hi-lo-temp">High: {tempsFahrenheit.minTemp}° | Low: {tempsFahrenheit.maxTemp}°</p>
                <p className="humidity">Humidity: {forecast.main.humidity}%</p>
              </div>
            </div>
            <div>
              <VisualWeather />
            </div>
          </div> 
        }
    </div>
  )
}

export default CurrentWeather;

