import meteoServices from '../../../../services/meteo';
import actions from './actions';

const setIssPositionMeteo = (coordinates) => (dispatch) => {
  meteoServices.getMeteoFromLat(coordinates).then((res) => {
    dispatch(actions.setIssPositionMeteo(res));
  });
};

export default {
  setIssPositionMeteo,
};
