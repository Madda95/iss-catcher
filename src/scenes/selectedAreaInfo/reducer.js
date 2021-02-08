import types from './types';

const initialState = {
  location: '',
  passes: [],
  coordinates: {},
  isSelectedArea: false,
  isSearching: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SELECTED_AREA:
      return {
        ...state,
        isSelectedArea: !state.isSelectedArea,
      };
    case types.SET_ISS_PASSES_FOR_LOCATION:
      return {
        ...state,
        passes: action.value.passes,
        coordinates: action.value.coordinates,
        location: action.value.location,
      };
    case types.IS_SERCHING:
      return {
        ...state,
        isSearching: !state.isSearching,
      };
    default:
      return state;
  }
};

export default reducers;
