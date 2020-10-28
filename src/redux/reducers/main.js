import { combineReducers } from 'redux';
import xLabelsReducer from './xLabelsReducer.js';
import dataPointsReducer from './dataPointsReducer.js';
import assetsReducer from './assetsReducer.js';
import savedChartsReducer from './savedChartsReducer.js';
import categoriesReducer from './categoriesReducer.js';
import usernameReducer from './usernameReducer.js';

var rootReducer = combineReducers({
  xLabels: xLabelsReducer,
  dataPoints: dataPointsReducer,
  assets: assetsReducer,
  categories: categoriesReducer,
  savedCharts: savedChartsReducer,
  username: usernameReducer
});

export default rootReducer;