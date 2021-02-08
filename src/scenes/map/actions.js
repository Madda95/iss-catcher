import types from './types';

const setIssPostition = (coordinates, location) => {
  return {
    value: {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      location: location,
    },
    type: types.SET_ISS_POSITION,
  };
};

export default {
  setIssPostition,
};
