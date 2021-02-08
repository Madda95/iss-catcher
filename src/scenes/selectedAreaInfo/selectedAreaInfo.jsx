import React from 'react';
import styles from './selectedAreaInfo.module.scss';
import CurrentStatsInfo from '../currentsStats/components/currentStatInfo/currentStatInfo';
import latitudeIcon from '../../assets/images/latitude.png';
import longitudeIcon from '../../assets/images/longitude.png';
import PassesInfo from './components/passesInfo/passesInfo';

const SelectedAreaInfo = ({isSelectedArea, setIsSelectedArea, coordinates, passes, location,isSearching,toggleIsSearching}) => {
  return (
    <div>
      <div className={styles.box}>
        {passes && passes.length > 0 ? (
          <>
          {isSearching ? (
            <>
            <div className={styles.loader}></div>
            </>
          ) : <>
          <div className={styles.infoHeader}>
          <div className={styles.title}>SELECTED INFO</div>
          <div className={styles.selectedCity}>
            <div className={styles.pin} />
            <span>{location}</span>
          </div>
          <div className={styles.coordinates}>
            <CurrentStatsInfo
              label={'Latitude: '}
              value={coordinates.latitude ? coordinates.latitude.toFixed(2) : ''}
              icon={latitudeIcon}
            />
            <CurrentStatsInfo
              label={'Longitude: '}
              value={coordinates.longitude ? coordinates.longitude.toFixed(2) : ''}
              icon={longitudeIcon}
            />
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.infoPasses}>
          {passes.map((pass) => {
            return <PassesInfo image={pass.icon} onDate={pass.date} key={pass.date}/>;
          })}
        </div>
          </>}
        </>
        ) : (<><div className={styles.welcome}>Benvenuto, segui gli austronati dell' ISS nel loro viaggio e usa il pin per sapere quando l'astronave passera sopra di te 🤯</div></>)}
        <div
          className={`${styles.handleSelectionArea} ${isSelectedArea ? styles.onSearch : ''}`}
          onClick={() => {
            setIsSelectedArea();
          }}
        />
        
      </div>
    </div>
  );
};

export default SelectedAreaInfo;
