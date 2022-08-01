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
        console.log(weather);
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
      {
        !weather ? 'loading'
          :
            <div>
              
              <p>{weather.main.feels_like}</p>
            </div>
        }
    </div>
  )
}

export default CurrentWeather;

