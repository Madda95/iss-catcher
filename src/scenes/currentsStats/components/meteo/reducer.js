import types from './types';

const initialState = {
  humidity: '',
  state: '',
  temperature: '',
};

const reducer = (store = initialState, action) => {
  const type = action.type;

  switch (type) {
    case types.SET_ISS_WHEATER:
      return {
        ...store,
        humidity: action.value.humidity,
        state: action.value.state,
        temperature: action.value.temperature,
      };
    default:
      return store;
  }
};

export default reducer;
