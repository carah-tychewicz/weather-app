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

  // const toFahrenheit = (kel) => {
  //   const fahrenheit = (kel - 273.15) * 9 / 5 + 32;
  //   const fRounded = fahrenheit.toFixed(0);
  //   return fRounded;
  // }

  return (
    <div className="container">
      <div className="weather-card">
        <div className="title">
          <h3>Today's Forecast</h3>
        </div>
        <div className="weather-forecast">
          <p>test</p>
          <p>{forecast.visibility}</p>
          <p>{forecast.main.temp}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather;

