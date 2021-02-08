import axios from './axios';

const getDateFromTimeStamp = (value) => {
  let date = new Date(value * 1000);
  let year = new Intl.DateTimeFormat('it', {year: 'numeric'}).format(date);
  let month = new Intl.DateTimeFormat('it', {month: 'long'}).format(date);
  let day = new Intl.DateTimeFormat('it', {day: 'numeric'}).format(date);
  let hour = new Intl.DateTimeFormat('it', {hour: '2-digit'}).format(date);
  let min = new Intl.DateTimeFormat('it', {minute: 'numeric'}).format(date);
  return `${day} ${month} ${year} - ${hour}:${min.length === 1 ? '0' + min : min}`;
};

const getDateFromTimeStampForMeteo = (value) => {
  let date = new Date(value * 1000);
  let year = new Intl.DateTimeFormat('it', {year: 'numeric'}).format(date);
  let month = new Intl.DateTimeFormat('it', {month: '2-digit'}).format(date);
  let day = new Intl.DateTimeFormat('it', {day: '2-digit'}).format(date);

  return [year, month, day];
};

const getActualIssPosition = () => {
  return new Promise((resolve) => {
    axios.get('http://api.open-notify.org/iss-now.json').then((res) => {
      let coordinates = res.data.iss_position;
      coordinates.latitude = parseFloat(coordinates.latitude);
      coordinates.longitude = parseFloat(coordinates.longitude);
      new Promise((resolve) => {
        axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=AIzaSyA9fK3E11pSXiANkYPQ7wza-7G-dKZSQJw`
          )
          .then((res) => {
            resolve([
              coordinates,
              res.data.results[0] ? res.data.results[0].formatted_address : 'Somewhere over the world..',
            ]);
          });
      }).then((res) => {
        resolve(res);
      });
    });
  });
};

const getNextPassesOnLocations = (coordinates) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://api.open-notify.org/iss-pass.json?lat=${coordinates.latitude}&lon=${coordinates.longitude}`)
      .then((res) => {
        let tempPasses = res.data.response;
        let passes = [];

        if (tempPasses) {
          passes = tempPasses.map((pass) => {
            return {
              date: getDateFromTimeStamp(pass.risetime),
              date_for_meteo: getDateFromTimeStampForMeteo(pass.risetime),
            };
          });
        }
        let passesLocation = {
          longitude: coordinates.longitude,
          latitude: coordinates.latitude,
          passes: passes,
        };
        resolve(passesLocation);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {
  getActualIssPosition,
  getNextPassesOnLocations,
};
