const initialState = {
  apiKey: process.env.REACT_APP_WEATHER_API_KEY,
  location: {
    lat: '19.1204672',
    long: '72.88698149999999',
  },
  weather: {
    current: null,
    daily: [],
    hourly: [],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    case 'UPDATE_WEATHER':
      return {
        ...state,
        weather: {
          current: action.payload.current,
          hourly: action.payload.hourly,
          daily: action.payload.daily,
        },
      };
  }
  return state;
}
