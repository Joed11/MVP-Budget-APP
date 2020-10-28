import store from '../store.js';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation.jsx';
import changeAssets from '../actions/changeAssets.js';
import changeUsername from '../actions/changeUsername.js';

const mapDispatchToProps = (dispatch) => {
  return {
      updateAssets: (assetNumber) => {
        dispatch(changeAssets(assetNumber))
      },
      updateUsername: (username) => {
        dispatch(changeAssets(username))
      },
  }
}

const mapStateToProps = (store) => ({
    assets: store.assets,
    username: store.username,
    savedCharts: store.savedCharts,
    currentChartData: store.dataPoints,
    currentChartLabels: store.xLabels,
  })

var NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)

export default NavigationContainer;