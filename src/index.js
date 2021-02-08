import React from 'react';
import ReactDOM from 'react-dom';
import {rootReducer} from './reducers';
import App from './App';
import general from './utilities/general';

const store = general.configureStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
