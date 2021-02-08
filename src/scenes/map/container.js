import {connect} from 'react-redux';
import Map from './map';
import operations from './operations';
import operationsInfoArea from '../selectedAreaInfo/operations';

const mapStateToProps = (store) => ({
  coordinates: {
    longitude: store.map.longitude,
    latitude: store.map.latitude,
  },
  isSelectedArea: store.selectAreaInfo.isSelectedArea,
  isSearching: store.selectAreaInfo.isSearching,
});

const mapDispatchToProps = (dispatch) => ({
  setIssPosition: () => dispatch(operations.setIssPostition()),
  setIssPassesForLocation: (coordinates) => dispatch(operationsInfoArea.setIssPassesForLocation(coordinates)),
  toggleIsSearching: () => dispatch(operationsInfoArea.setIsSearching()),
  setIsSelectedArea: () => dispatch(operationsInfoArea.setIsSelectedArea()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
