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
    <div className='card'>
      <section className='card-header'>{props.date}</section>
      <img src={weatherIcon} alt='IMG NOT FOUND' />
      <section className='card-body'>
        <div className='card-title'>{props.temp}°</div>
        <div className='card-text'>{capitalize(props.desc)}</div>
      </section>
    </div>
  );
};

export default HourlyWeatherCard;
