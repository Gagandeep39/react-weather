import React from 'react';
import './HourlyWeatherCard.css';
import CloudyCardImage from '../../../../assets/cloudy.png';
import RainyCardImage from '../../../../assets/rainy.png';
import SunnyCardImage from '../../../../assets/sunny.png';

const HourlyWeatherCard = (props) => {

  let weatherIcon = RainyCardImage;
  if (props.id === 800) weatherIcon = SunnyCardImage;
  else if (props.id <= 800) weatherIcon = RainyCardImage;
  else weatherIcon = CloudyCardImage;
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div class='card'>
      <section class='card-header'>{props.date}</section>
      <img src={weatherIcon} alt='IMG NOT FOUND' />
      <section class='card-body'>
        <div class='card-title'>{props.temp}°</div>
        <div class='card-text'>{capitalize(props.desc)}</div>
      </section>
    </div>
  );
};

export default HourlyWeatherCard;
