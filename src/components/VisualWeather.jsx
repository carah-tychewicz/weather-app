import './VisualWeather.css';

const VisualWeather = (props) => {
  if (props) {
    console.log(props);
    return (
      <div>
        <p>Success</p>
      </div>
    );
  } else {
    return (
      <div><p>Failure</p></div>
    )
  }
}

export default VisualWeather;