import types from './types';

const setIssPositionMeteo = (meteo) => {
  return {
    value: {
      humidity: meteo.humidity,
      state: meteo.state,
      temperature: meteo.temperature,
    },
    type: types.SET_ISS_WHEATER,
  };
};

export default {
  setIssPositionMeteo,
};
