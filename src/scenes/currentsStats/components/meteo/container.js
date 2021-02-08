import {connect} from 'react-redux';
import Meteo from './meteo';

const mapStateToProps = (store) => ({
  meteo: store.meteo,
  location: store.map.location,
});

export default connect(mapStateToProps)(Meteo);
