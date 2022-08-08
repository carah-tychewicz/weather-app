import './VisualWeather.css';

const VisualWeather = (props) => {
  console.log(props);
  let icon = props.location[0].icon;

  return (
    <div className='icon-container'>
      <img className='icon' alt='' src={'http://openweathermap.org/img/wn/'+ icon +'@2x.png'} />
      <p>{}</p>
    </div>
  )
}

export default VisualWeather;