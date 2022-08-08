import './VisualWeather.css';

const VisualWeather = (props) => {
  console.log(props);
  let icon = props.location[0].icon;

  return (
    <div>
      <img src={'http://openweathermap.org/img/wn/'+ icon +'@2x.png'} />
    </div>
  )
}

export default VisualWeather;