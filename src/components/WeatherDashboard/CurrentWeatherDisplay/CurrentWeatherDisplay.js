import React, { Component } from 'react';
import classes from './CurrentWeatherDisplay.component.css';
import CloudyCardImage from '../../../assets/cloudy.png';
import RainyCardImage from '../../../assets/rainy.png';
import SunnyCardImage from '../../../assets/sunny.png';
import { ReactComponent as RefreshButton } from '../../../assets/refresh.svg';
import { connect } from 'react-redux';

class CurrentWeatherDisplay extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.getLocation();
  }

  getLocation() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      this.props.onStoreLocation(location);
    });
  }

  refreshButtonHandler = () => {};

  render() {
    return (
      <div>
        <div className={classes.card}>
          <section class='card-header'>London</section>
          <section className='current-title'>30°</section>

          <section class='box'>
            <img src={SunnyCardImage} alt='IMG NOT FOUND' />
            <div class='card-text'>Moderate Rain</div>
          </section>

          <section class='card-body'>
            <section class='card-text'>Updated as of 08:20</section>
          </section>
          <RefreshButton
            onClick={this.refreshButtonHandler}
            className='refresh-btn'
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Calling this will execute dispatch functin
    onStoreLocation: (location) => {
      dispatch({
        type: 'STORE_LOCATION',
        value: location,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeatherDisplay);
