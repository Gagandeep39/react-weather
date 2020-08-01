import React from 'react';
import classes from './CurrentWeatherDisplay.component.css';
import CloudyCardImage from '../../../assets/cloudy.png';
import RainyCardImage from '../../../assets/rainy.png';
import SunnyCardImage from '../../../assets/sunny.png';
import { ReactComponent as RefreshButton } from '../../../assets/refresh.svg'

export default function CurrentWeatherDisplay() {
  return (
    <div>
      <div className={classes.card}>
      <section class='card-header'>London</section>
      <section className='current-title'>30°</section>

      <section class="box">
        <img src={SunnyCardImage} alt='IMG NOT FOUND' />
        <div class='card-text'>Moderate Rain</div>
      </section>

      <section class='card-body'>
        <section class='card-text'>Updated as of 08:20</section>
      </section>
      {/* <hr style={{margin: '8px'}}/> */}
      <RefreshButton className='refresh-btn'/>
    </div>
    </div>
  );
}
