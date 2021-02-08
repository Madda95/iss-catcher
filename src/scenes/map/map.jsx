import React, {useEffect} from 'react';
import {MapContainer, Marker, TileLayer, useMapEvents, useMap} from 'react-leaflet';
import styles from './map.module.scss';
import L from 'leaflet';
import issIcon from '../../assets/images/iss_station.png';

const Map = ({
  setIssPosition,
  coordinates,
  isSelectedArea,
  setIssPassesForLocation,
  toggleIsSearching,
  setIsSelectedArea,
  isSearching,
}) => {
  useEffect(() => {
    if (!coordinates.latitude && !coordinates.longitude) {
      setIssPosition();
      setInterval(() => {
        setIssPosition();
      }, 10000);
    }
  });

  let icon = L.icon({
    iconRetinaUrl: issIcon,
    iconUrl: issIcon,
    iconSize: [100, 100],
  });

  const MyMarket = () => {
    return <Marker position={[coordinates.latitude, coordinates.longitude]} icon={icon} />;
  };

  const GetPositionOnMap = (e) => {
    useMapEvents({
      click (e) {
        if (isSelectedArea && !isSearching) {
          const position = e.latlng;
          let getCoordinates = {
            latitude: position.lat,
            longitude: position.lng,
          };
          setIssPassesForLocation(getCoordinates);
          setIsSelectedArea();
          toggleIsSearching();
        }
      },
    });

    return null;
  };

  const UpdateMap = () => {
    const map = useMap();
    if (!isSelectedArea) {
      let coordinatesForUpdate = {
        lat: coordinates.latitude - 10,
        lng: coordinates.longitude,
      };
      map.setView(coordinatesForUpdate, 4);
    }
    return null;
  };

  return (
    <div className={styles.box}>
      {coordinates.longitude && coordinates.latitude ? (
        <MapContainer
          center={[coordinates.latitude - 10, coordinates.longitude]}
          zoom={4}
          scrollWheelZoom={false}
          style={isSelectedArea ? {cursor: 'cell', height: '100vh'} : {height: '100vh'}}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <GetPositionOnMap />
          <MyMarket />
          <UpdateMap />
        </MapContainer>
      ) : null}
    </div>
  );
};

export default Map;
