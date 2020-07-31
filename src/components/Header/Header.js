import React from 'react';
import './Header.css';
import { ReactComponent as WeatherIcon } from '../../assets/weather.svg';

export default function Header() {
  return (
    <div className='header'>
      <WeatherIcon className='header-img'>dfvghj</WeatherIcon>
      <span className='title'>Weather</span>
    </div>
  );
}
