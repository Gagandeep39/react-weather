import React from 'react';
import './App.css';
import HourlyWeatherDisplay from './components/WeatherDashboard/HourlyWeatherDisplay/HourlyWeatherDisplay';
import DailyWeatherDisplay from './components/WeatherDashboard/DailyWeatherDisplay/DailyWeatherDisplay';
import Header from './components/Header/Header';
import CurrentWeatherDisplay from './components/WeatherDashboard/CurrentWeatherDisplay/CurrentWeatherDisplay';

function App() {
  return (
    <div className='App'>
      <Header />
      <CurrentWeatherDisplay />
      <HourlyWeatherDisplay />
      <DailyWeatherDisplay />
    </div>
  );
}

export default App;
