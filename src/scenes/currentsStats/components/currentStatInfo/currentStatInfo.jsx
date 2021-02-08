import React from 'react';
import styles from './currentStatInfo.module.scss';

const CurrentStatInfo = (props) => {
  const {value, icon, label} = props;

  return (
    <div className={styles.box}>
      <div className={styles.icon} style={{backgroundImage: `url(${icon})`}} />
      <div>
        {label ? <span className={styles.label}>{label}</span> : ''}
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};

export default CurrentStatInfo;
