import {combineReducers} from 'redux';
import {mapReducer} from './scenes/map';
import {meteoReducer} from './scenes/currentsStats/components/meteo';
import {selectAreaInfoReducer} from './scenes/selectedAreaInfo';

export const rootReducer = combineReducers({
  map: mapReducer,
  meteo: meteoReducer,
  selectAreaInfo: selectAreaInfoReducer,
});

export default {rootReducer};
