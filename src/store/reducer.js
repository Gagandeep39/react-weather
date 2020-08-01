const initialState = {
  location: {
    lat: '19.1204672',
    long: '72.88698149999999',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_LOCATION':
      console.log(action.value);
      return {
        ...state,
        location: action.value,
      };
  }
  return state;
}
