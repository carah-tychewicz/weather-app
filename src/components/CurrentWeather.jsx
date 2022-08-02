import { useEffect, useState } from "react";
import { url } from '../config.js';
import './CurrentWeather.css';

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

    getWeather();
  }, []);

  const toFahrenheit = (kel) => {
    const fahrenheit = (kel - 273.15) * 9 / 5 + 32;
    const fRounded = fahrenheit.toFixed(0);
    return fRounded;
  }

  const tempConverter = (tempArr) => {
    let i = 0;
    while (i < tempArr.length) {
      
      i++
    }
    console.log(convertedTempObj);
    return convertedTempObj;
  }

  const temperatureArr = forecast ?  {temp: forecast.main.temp, feelsLike: forecast.main.feels_like} : '';
  console.log(tempArr);

  tempConverter(temperatureArr);

  return (
    <div className="container">
      <div className="weather-card">
        <div className="title">
          <h3>Today's Forecast</h3>
        </div>
        {
          forecast ? 
          <div className="weather-forecast">
            <p>{}° {forecast.weather[0].main}</p>
            <p>Feels like {forecast.main.feels_like}°</p>
            <p>Min Temp: {forecast.main.temp_min}° | Max Temp: {forecast.main.temp_max}°</p>
            <p>{forecast.main.humidity}%</p>
          </div> 
          : ''
          }
      </div>
    </div>
  )
}

export default CurrentWeather;

