import './LocaleDetails.css';
const LocaleDetails = (props) => {

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  var today = new Date(),
  time = today.getHours() + ':' + today.getMinutes();

  // + ':' + today.getSeconds();

  return (
    <div className="location-time-date">
      <p>{props.location} | {time} | {date}</p>
    </div>
  );
};

export default LocaleDetails;