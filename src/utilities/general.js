import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const configureStore = (reducer, initialState, reduxExtension) => {
  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk), reduxExtension ? reduxExtension() : (f) => f)
  );
};

export default {
  configureStore,
};
