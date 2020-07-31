import React from 'react';
import './HourlyWeatherCard.css';
import CloudyCardImage from '../../../../assets/cloudy.png';
import RainyCardImage from '../../../../assets/rainy.png';
import SunnyCardImage from '../../../../assets/sunny.png';

const HourlyWeatherCard = (props) => {
  return (
    <div class='card'>
      <section class='card-header'>11:00</section>
      <img src={CloudyCardImage} alt='IMG NOT FOUND' />
      <section class='card-body'>
        <div class='card-title'>12°</div>
        <div class='card-text'>Moderate Rain</div>
      </section>
    </div>
  );
};

export default HourlyWeatherCard;
