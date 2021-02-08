import React from 'react';
import styles from './meteo.module.scss';

const Meteo = ({meteo, location}) => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.temperature}>{meteo.temperature}</div>
        <div className={styles.icon} style={{backgroundImage: `url(${meteo.state})`}} />
        <div className={styles.humidity}>{meteo.humidity}%</div>
      </div>
      <div className={styles.location}>{location}</div>
    </div>
  );
};

export default Meteo;
