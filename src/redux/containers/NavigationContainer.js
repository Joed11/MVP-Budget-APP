import store from '../store.js';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation.jsx';
import changeAssets from '../actions/changeAssets.js';
import changeUsername from '../actions/changeUsername.js';
import changeLabels from '../actions/changeLabels.js';
import changeDataPoints from '../actions/changeDataPoints.js';
import changeSavedCharts from '../actions/changeSavedCharts.js';
import changeCategories from '../actions/changeCategories.js';

const mapDispatchToProps = (dispatch) => {
  return {
      updateAssets: (assetNumber) => {
        dispatch(changeAssets(assetNumber))
      },
      updateUsername: (username) => {
        dispatch(changeUsername(username))
      },
      updateLabels: (newLabels) => {
        dispatch(changeLabels(newLabels))
      },
      updateDataPoints: (newData) => {
        dispatch(changeDataPoints(newData))
      },
      updateCategories: (newCategories) => {
        dispatch(changeCategories(newCategories))
      },
      updateSavedCharts: (newCharts) => {
        dispatch(changeSavedCharts(newCharts))
      },
      updateWholeChart: (newLabels, assetNumber, newData, newCategories) => {
        dispatch(changeLabels(newLabels));
        dispatch(changeAssets(assetNumber));
        dispatch(changeDataPoints(newData));
        dispatch(changeCategories(newCategories));
      },
  }
}

const mapStateToProps = (store) => ({
    username: store.username,
    labels: store.labels,
    assets: store.assets,
    dataPoints: store.dataPoints,
    categories: store.categories,
    savedCharts: store.savedCharts,
    defaultChart: store.defaultChart
  })

var NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)

export default NavigationContainer;