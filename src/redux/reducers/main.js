import { combineReducers } from 'redux';
import labelsReducer from './labelsReducer.js';
import dataPointsReducer from './dataPointsReducer.js';
import assetsReducer from './assetsReducer.js';
import savedChartsReducer from './savedChartsReducer.js';
import defaultChartReducer from './defaultChartReducer.js';
import categoriesReducer from './categoriesReducer.js';
import usernameReducer from './usernameReducer.js';

var rootReducer = combineReducers({
  labels: labelsReducer,
  dataPoints: dataPointsReducer,
  assets: assetsReducer,
  categories: categoriesReducer,
  savedCharts: savedChartsReducer,
  username: usernameReducer,
  defaultChart: defaultChartReducer,
});

export default rootReducer;