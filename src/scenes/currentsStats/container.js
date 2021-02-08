import CurrentStats from './currentStarts';
import {connect} from 'react-redux';

const mapStateToProps = (store) => ({
  coordinates: {
    longitude: store.map.longitude,
    latitude: store.map.latitude,
  },
  location: store.map.location,
});

export default connect(mapStateToProps, null)(CurrentStats);
