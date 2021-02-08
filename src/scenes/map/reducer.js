import types from './types';

const initialState = {
  latitude: 0,
  longitude: 0,
  location: '',
};

const reducer = (store = initialState, action) => {
  const type = action.type;

  switch (type) {
    case types.SET_ISS_POSITION:
      return {
        ...store,
        longitude: action.value.longitude,
        latitude: action.value.latitude,
        location: action.value.location,
      };
    default:
      return store;
  }
};

export default reducer;
