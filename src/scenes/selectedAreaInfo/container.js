import {connect} from 'react-redux';
import SelectedAreaInfo from './selectedAreaInfo';
import operations from './operations';

const mapStateToProps = (store) => ({
  isSelectedArea: store.selectAreaInfo.isSelectedArea,
  coordinates: store.selectAreaInfo.coordinates,
  passes: store.selectAreaInfo.passes,
  location: store.selectAreaInfo.location,
  isSearching: store.selectAreaInfo.isSearching,
});

const mapDispatchToProps = (dispatch) => ({
  setIsSelectedArea: () => dispatch(operations.setIsSelectedArea()),
  toggleIsSearching: () => dispatch(operations.setIsSearching()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedAreaInfo);
