import React from 'react';
import styles from './currentStats.module.scss';
import {CurrentStatInfo} from './components/currentStatInfo';
import {Meteo} from './components/meteo';
import locationImage from '../../assets/images/pin.png';
import clock from '../../assets/images/clock.png';
import latitudeImg from '../../assets/images/latitude.png';
import longitudeImg from '../../assets/images/longitude.png';

const CurrentStats = ({coordinates, location}) => {
  const getAcutalTime = () => {
    return new Date().toUTCString();
  };

  return (
    <div className={styles.box}>
      <div className={styles.basicInfoBox}>
        <CurrentStatInfo value={location} icon={locationImage} />
        <CurrentStatInfo value={getAcutalTime()} icon={clock} />
        <CurrentStatInfo value={coordinates.latitude} label={'Latitude: '} icon={latitudeImg} />
        <CurrentStatInfo value={coordinates.longitude} label={'Longitude: '} icon={longitudeImg} />
      </div>
      <div className={styles.dashed} />
      <Meteo />
    </div>
  );
};

export default CurrentStats;
