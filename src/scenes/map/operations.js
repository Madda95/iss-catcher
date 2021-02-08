import issService from '../../services/iss';
import meteoService from '../../services/meteo';
import actions from './actions';
import meteoActions from '../currentsStats/components/meteo/actions';

const setIssPostition = () => (dispatch) => {
  issService.getActualIssPosition().then((res) => {
    let coordinates = res[0];
    let location = res[1];
    meteoService.getMeteoFromLat(coordinates).then((meteo) => {
      dispatch(meteoActions.setIssPositionMeteo(meteo));
      dispatch(actions.setIssPostition(coordinates, location));
    });
  });
};

export default {
  setIssPostition,
};
