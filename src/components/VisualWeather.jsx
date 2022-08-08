import './VisualWeather.css';

const VisualWeather = (props) => {
  console.log(props);
  let weatherStatus = props.location[0].main;

  switch(weatherStatus) {
    case "Clouds":
      return (
        <div>
          <p>Clouds</p>
        </div>
      )
    break;
    case "Clear":
      return (
        <div>
          <p>Clear</p>
        </div>
      )
    break;
    case "Snow":
      return (
        <div>
          <p>Snow</p>
        </div>
      )
    break;
    case "Rain":
      return (
        <div>
          <p>Rain</p>
        </div>
      )
    break;
    case "Drizzle":
      return (
        <div>
          <p>Drizzle</p>
        </div>
      )
    break;
    case "Thunderstorm":
      return (
        <div>
          <p>Thunderstorm</p>
        </div>
      )
    break;
    default:
      return (
        <div>
          <p>Default</p>
        </div>
      )
  }
}

export default VisualWeather;