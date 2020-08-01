import React from 'react';
import './HourlyWeatherDisplay.css';
import HourlyWeatherCard from './HourlyWeatherCard/HourlyWeatherCard';

export default function HourlyWeatherDisplay() {
  return (
    <div>
      <section className='hourly-title'>Hourly Forecast</section>
      <div className='hourly-weather'>
        <section className='arrow-left'/>
        <HourlyWeatherCard />
        <HourlyWeatherCard />
        <HourlyWeatherCard />
        <section className='arrow-right'/>
      </div>
    </div>
  );
}
