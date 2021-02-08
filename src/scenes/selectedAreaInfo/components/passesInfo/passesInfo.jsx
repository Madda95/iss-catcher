import React from 'react';
import styles from './passesInfo.module.scss';

const PassesInfo = ({image, onDate}) => {
  return (
    <div className={styles.box}>
      <div className={styles.image} style={{backgroundImage: `url(${image})`}} />
      <div className={styles.onDate}>{onDate}</div>
    </div>
  );
};

export default PassesInfo;
