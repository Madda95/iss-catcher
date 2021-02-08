import axios from './axios';
import sn from '../assets/images/meteo/sn.png';
import sl from '../assets/images/meteo/sl.png';
import h from '../assets/images/meteo/h.png';
import t from '../assets/images/meteo/t.png';
import hr from '../assets/images/meteo/hr.png';
import lr from '../assets/images/meteo/lr.png';
import s from '../assets/images/meteo/s.png';
import hc from '../assets/images/meteo/hc.png';
import lc from '../assets/images/meteo/lc.png';
import c from '../assets/images/meteo/c.png';

const getMeteoFromLat = (coordinates) => {
  return new Promise((resolve) => {
    axios
      .get(`https://www.metaweather.com/api/location/search/?lattlong=${coordinates.latitude},${coordinates.longitude}`)
      .then((res) => {
        const woeid = res.data[0].woeid;
        new Promise((resolve) => {
          axios.get(`https://www.metaweather.com/api/location/${woeid}/`).then((res) => {
            let meteo = {};
            let meteoItem = res.data.consolidated_weather[0];
            meteo.humidity = meteoItem.humidity;
            meteo.temperature = getTemperature(meteoItem.the_temp);
            meteo.state = getMeteoIconFromKey(meteoItem.weather_state_abbr);
            resolve(meteo);
          });
        }).then((meteo) => {
          resolve(meteo);
        });
      });
  });
};

const getMeteoForThatDay = (coordinates, date) => {
  return new Promise((resolve) => {
    axios
      .get(`https://www.metaweather.com/api/location/search/?lattlong=${coordinates.latitude},${coordinates.longitude}`)
      .then((res) => {
        const woeid = res.data[0].woeid;
        new Promise((resolve) => {
          axios
            .get(`https://www.metaweather.com/api/location/${woeid}/${date[0]}/${date[1]}/${date[2]}`)
            .then((res) => {
              let meteo = {};
              let meteoItem = res.data[0];
              meteo.state = getMeteoIconFromKey(meteoItem.weather_state_abbr);
              console.log(meteo);
              resolve(meteo);
            });
        }).then((meteo) => {
          resolve(meteo);
        });
      });
  });
};

const getMeteoIconFromKey = (key) => {
  switch (key) {
    case 'sn':
      return sn;
    case 'sl':
      return sl;
    case 'h':
      return h;
    case 't':
      return t;
    case 'hr':
      return hr;
    case 'lr':
      return lr;
    case 's':
      return s;
    case 'hc':
      return hc;
    case 'lc':
      return lc;
    case 'c':
      return c;
  }
};

const getTemperature = (baseTemp) => {
  return `${Math.ceil(baseTemp)}°`;
};

export default {
  getMeteoFromLat,
  getMeteoForThatDay,
};
