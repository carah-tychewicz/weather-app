import { useEffect, useState } from "react";
import { url } from '../config.js';
import './CurrentWeather.css';

const CurrentWeather = () => {

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  var today = new Date(),
  time = today.getHours() + ':' + today.getMinutes();

  // + ':' + today.getSeconds();

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

    getWeather();
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
      <div className="weather-card">
        <div className="title">
          <h3>Today's Forecast</h3>
        </div>
        {
          forecast ? 
          <div className="weather-forecast">
            <div className="location-time-date">
              <p>{forecast.name} | {time} | {date}</p>
            </div>
            <div className="weather-report">
              <p>{tempsFahrenheit.currentTemp}° {forecast.weather[0].main}</p>
              <p>Feels like {tempsFahrenheit.feelsLike}°</p>
              <p>Min Temp: {tempsFahrenheit.minTemp}° | Max Temp: {tempsFahrenheit.maxTemp}°</p>
              <p>Humidity: {forecast.main.humidity}%</p>
            </div>
          </div> 
          : ''
          }
      </div>
    </div>
  )
}

export default CurrentWeather;

