import React from 'react';
import './DailyWeatherDisplay.css';
import DailyWeatherCard from './DailyWeatherCard/DailyWeatherCard';

export default function DailyWeatherDisplay() {
  return (
    <div>
      <section className='daily-title'>Daily Forecast</section>
      <div className='daily-weather'>
        <section className='arrow-left'/>
        <DailyWeatherCard />
        <DailyWeatherCard />
        <DailyWeatherCard />
        <section className='arrow-right'/>
      </div>
    </div>
  );
}
