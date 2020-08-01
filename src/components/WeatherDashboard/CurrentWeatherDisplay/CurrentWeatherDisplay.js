import React, { Component } from 'react';
import classes from './CurrentWeatherDisplay.component.css';
import CloudyCardImage from '../../../assets/cloudy.png';
import RainyCardImage from '../../../assets/rainy.png';
import SunnyCardImage from '../../../assets/sunny.png';
import { ReactComponent as RefreshButton } from '../../../assets/refresh.svg';
import { connect } from 'react-redux';
import axios from 'axios';

class CurrentWeatherDisplay extends Component {
  
  constructor(props) {
    super(props);
    this.getLocation();
    this.state = {
      city: '',
      lastUpdated: '',
    };
  }

  fetchAllDataFromServer = () => {
    
    const URL =
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
      this.props.location.lat +
      '&lon=' +
      this.props.location.long +
      '&units=metric&appid=' +
      this.props.api;

    axios.get(URL).then((response) => {
      const payload = {
        current: response.data.current,
        hourly: response.data.hourly,
        daily: response.data.daily,
      };
      this.setState({
        lastUpdated: new Date().toLocaleTimeString(),
      });
      this.props.onUpdateWeather(payload);
    });
  };

  getLocation() {
    axios
      .get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}`
      )
      .then((response) => {
        this.setState({
          city: response.data.city,
        });
        const location = {
          lat: response.data.latitude,
          long: response.data.longitude,
        };
        this.props.onStoreLocation(location);
        this.fetchAllDataFromServer();
      });
  }

  refreshButtonHandler = () => {
    this.getLocation();
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    let weatherUI;
    if (this.props.currentWeather) {
      const currentWeather = this.props.currentWeather;
      const description = this.capitalize(
        currentWeather.weather[0].description
      );
      let weatherIcon = RainyCardImage;
      if (currentWeather.weather[0].id === 800) weatherIcon = SunnyCardImage;
      else if (currentWeather.weather[0].id <= 800)
        weatherIcon = RainyCardImage;
      else weatherIcon = CloudyCardImage;

      weatherUI = (
        <div>
          <div className={classes.card}>
            <section className='card-header'>{this.state.city}</section>
            <section className='current-title'>{currentWeather.temp}°</section>

            <section className='box'>
              <img src={weatherIcon} alt='IMG NOT FOUND' />
              <div className='card-text'>{description}</div>
            </section>

            <section className='card-body'>
              <section className='card-text'>
                Updated as of {this.state.lastUpdated}
              </section>
            </section>
            <RefreshButton
              onClick={this.refreshButtonHandler}
              className='refresh-btn'
            />
          </div>
        </div>
      );
    }

    if (this.props.currentWeather) return weatherUI;
    else return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    api: state.apiKey,
    currentWeather: state.weather.current,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Calling this will execute dispatch functin
    onStoreLocation: (location) => {
      dispatch({
        type: 'STORE_LOCATION',
        payload: location,
      });
    },
    onUpdateWeather: (payload) => {
      dispatch({
        type: 'UPDATE_WEATHER',
        payload: payload,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeatherDisplay);
