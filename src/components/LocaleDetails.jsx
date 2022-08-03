import './LocaleDetails.css';

const LocaleDetails = (props) => {

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  var today = new Date(),
  time = today.getHours() + ':' + today.getMinutes();

  // + ':' + today.getSeconds();

  let location = props.location.toUpperCase();

  return (
    <div className="locale-container">
      <h6 className='location-date-time'>{location} | {time} | {date}</h6>
    </div>
  );
};

export default LocaleDetails;