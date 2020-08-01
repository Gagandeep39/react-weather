import React, { useState, useEffect } from 'react';
import './DailyWeatherDisplay.css';
import DailyWeatherCard from './DailyWeatherCard/DailyWeatherCard';
import { connect } from 'react-redux';

const DailyWeatherDisplay = (props) => {
  const [weatherState, setWeatherState] = useState([]);
  const [activeDays, setActiveDays] = useState({
    count: 0,
    value: [],
    activeRange: 0,
  });

  useEffect(() => {
    setWeatherState(props.weather);
    const arr = props.weather.slice(0, 3);
    setActiveDays((state) => {
      return { ...state, value: arr };
    });
  }, [props.weather]);

  const leftClickHandler = () => {
    let updatedActiveRange;
    let newDays;
    if (activeDays.activeRange === 3 || activeDays.activeRange === 6) {
      updatedActiveRange = activeDays.activeRange - 3;
      newDays = weatherState.slice(updatedActiveRange, updatedActiveRange + 3);
    } else {
      updatedActiveRange = 0;
      newDays = weatherState.slice(0, 3);
    }
    setActiveDays({
      activeRange: updatedActiveRange,
      value: newDays,
    });
  };

  const rightClickHandler = () => {
    let updatedActiveRange;
    let newDays;

    if (activeDays.activeRange === 0 || activeDays.activeRange === 3) {
      updatedActiveRange = activeDays.activeRange + 3;
      newDays = weatherState.slice(updatedActiveRange, updatedActiveRange + 3);
    } else {
      updatedActiveRange = 6;
      newDays = weatherState.slice(6, 8);
    }
    setActiveDays({
      activeRange: updatedActiveRange,
      value: newDays,
    });
  };

  return (
    <div>
      <section className='daily-title'>Daily Forecast</section>
      <div className='daily-weather'>
        <section className='arrow-left' onClick={leftClickHandler} />

        {activeDays.value.map((currentDay) => {
          return (
            <DailyWeatherCard
              id={currentDay.weather[0].id}
              temp={currentDay.temp.day}
              desc={currentDay.weather[0].description}
              date={new Date(currentDay.dt * 1000).toDateString()}
            />
          );
        })}
        <section className='arrow-right' onClick={rightClickHandler} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather.daily,
  };
};

export default connect(mapStateToProps)(DailyWeatherDisplay);
