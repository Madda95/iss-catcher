import types from './types';

const setIsSelectedArea = () => {
  return {
    type: types.TOGGLE_SELECTED_AREA,
  };
};

const setIssPassesForLocation = (passes, location, coordinates) => {
  return {
    value: {
      coordinates: coordinates,
      passes: passes,
      location: location,
    },
    type: types.SET_ISS_PASSES_FOR_LOCATION,
  };
};

const setIsSearching = () => {
  return {
    type: types.IS_SERCHING,
  };
};

export default {
  setIsSelectedArea,
  setIssPassesForLocation,
  setIsSearching,
};
