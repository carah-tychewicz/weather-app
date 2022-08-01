import { useEffect, useState } from "react";
import { url } from '../config.js';
import './CurrentWeather.css';

const CurrentWeather = () => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    

    const getWeather = async () => {
      try {
        const response = await fetch(url);
        const currentWeather = await response.json();
        setWeather(currentWeather);
      } catch(err) {
        console.log("ya dun goofed", err)
      }
    }

    getWeather();
  }, []);

  const toFahrenheit = (kel) => {
    const fahrenheit = (kel - 273.15) * 9 / 5 + 32;
    console.log(fahrenheit);
    return fahrenheit;
  }

  return (
    <div className="container">
      {weather ? <p>{weather.main.temp}</p> : ''}
    </div>
  )
}

export default CurrentWeather;

