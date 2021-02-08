import actions from './actions';
import meteoServices from '../../services/meteo';
import issServices from '../../services/iss';
import axios from '../../services/axios';

const setIsSelectedArea = () => (dispatch) => {
  dispatch(actions.setIsSelectedArea());
};

const setIssPassesForLocation = (coordinates) => (dispatch) => {
  let passes = '';
  let location = '';
  issServices
    .getNextPassesOnLocations(coordinates)
    .then((res) => {
      passes = res.passes;
      new Promise((resolve, reject) => {
        axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=AIzaSyA9fK3E11pSXiANkYPQ7wza-7G-dKZSQJw`
          )
          .then((res) => {
            resolve(res.data.results[0] ? res.data.results[0].formatted_address : 'Somewhere over the world..');
          })
          .catch((err) => {
            dispatch(actions.setIsSearching());
            console.log(err, 'No info there');
            return;
          });
      })
        .then(async (foundLocation) => {
          location = foundLocation;
          let newPass = [];
          for (const pass of passes) {
            await meteoServices.getMeteoForThatDay(coordinates, pass.date_for_meteo).then((res) => {
              newPass.push({icon: res.state, date: pass.date});
            });
          }
          if (newPass.length > 0) {
            dispatch(actions.setIssPassesForLocation(newPass, location, coordinates));
          } else {
            window.alert('Non sono previsti passaggi');
          }
        })
        .catch((e) => {
          console.log(e);
          dispatch(actions.setIsSearching());
        });
    })
    .catch((err) => {
      window.alert('Queste coordinate non sono disponibili');
    });
};

const setIsSearching = () => (dispatch) => {
  dispatch(actions.setIsSearching());
};

export default {
  setIsSelectedArea,
  setIssPassesForLocation,
  setIsSearching,
};
