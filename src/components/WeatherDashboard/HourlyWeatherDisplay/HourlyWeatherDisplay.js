import React, { useEffect, useState } from 'react';
import './HourlyWeatherDisplay.css';
import HourlyWeatherCard from './HourlyWeatherCard/HourlyWeatherCard';
import { connect } from 'react-redux';

const HourlyWeatherDisplay = (props) => {
  const [weatherState, setWeatherState] = useState([]);
  const [activeDays, setActiveDays] = useState({
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
    if (activeDays.activeRange >= 3) {
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

    if (activeDays.activeRange <= 18) {
      updatedActiveRange = activeDays.activeRange + 3;
      newDays = weatherState.slice(updatedActiveRange, updatedActiveRange + 3);
    } else {
      updatedActiveRange = 21;
      newDays = weatherState.slice(21, 24);
    }
    setActiveDays({
      activeRange: updatedActiveRange,
      value: newDays,
    });
  };

  return (
    <div>
      <section className='hourly-title'>Hourly Forecast</section>
      <div className='hourly-weather'>
        <section className='arrow-left' onClick={leftClickHandler} />
        {activeDays.value.map((currentDay) => {
          return (
            <HourlyWeatherCard
              key={currentDay.dt}
              id={currentDay.weather[0].id}
              temp={currentDay.temp.day}
              desc={currentDay.weather[0].description}
              date={new Date(currentDay.dt * 1000).toLocaleTimeString()}
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
    weather: state.weather.hourly,
  };
};

export default connect(mapStateToProps)(HourlyWeatherDisplay);
