import React from 'react';
import './DailyWeatherCard.css';
import CloudyCardImage from '../../../../assets/cloudy.png';
import RainyCardImage from '../../../../assets/rainy.png';
import SunnyCardImage from '../../../../assets/sunny.png';

const DailyWeatherCard = (props) => {
  return (
    <div class='card'>
      <section class='card-header'>26 July</section>
      <img src={SunnyCardImage} alt='IMG NOT FOUND' />
      <section class='card-body'>
        <div class='card-title'>30°</div>
        <div class='card-text'>Moderate Rain</div>
      </section>
    </div>
  );
};

export default DailyWeatherCard;
