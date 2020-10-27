import { combineReducers } from 'redux';
import xLabelsReducer from './xLabelsReducer.js';
import dataEntriesReducer from './dataEntriesReducer.js';
import assetsReducer from './assetsReducer.js';
import savedChartsReducer from './savedChartsReducer.js';
import categoriesReducer from './categoriesReducer.js';

var rootReducer = combineReducers({
  xLabels: xLabelsReducer,
  dataEntries: dataEntriesReducer,
  assets: assetsReducer,
  savedCharts: savedChartsReducer,
  categories: categoriesReducer
});

export default rootReducer;