import React, {useEffect} from 'react';
import {Map} from './scenes/map';
import {CurrentStats} from './scenes/currentsStats';
import {SelectedAreaInfo} from './scenes/selectedAreaInfo';
import {Provider} from 'react-redux';

const App = (props) => {
  const {store} = props;
  return (
    <div>
      <Provider store={store}>
        <Map />
        <CurrentStats />
        <SelectedAreaInfo />
      </Provider>
    </div>
  );
};

export default App;
