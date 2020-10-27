import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/main.js';


var defaultDates = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

var incomeColors = ['rgba(51,204,255,0.7)', 'rgba(51,204,51,0.7)', 'rgba(51,204,204,0.7)', 'rgba(153,153,255,0.7)', 'rgba(0,102,153,0.7)']

var expenseColors = ['rgba(255,0,0,0.7)', 'rgba(204,102,0,0.7)', 'rgba(153,0,153,0.7)', 'rgba(255,102,0,0.7)', 'rgba(255,204,0,0.7)']

var defaultAssets = 50000;

var defaultData = [
  {
    label: ['Income'],
    data: [1000,1000,1000,1000,1000,1000,1000,1000,0,1000,1000,1000],
    backgroundColor: incomeColors[0],
    borderColor: 'rgb(255, 255, 255)'
  },
  {
    label: ['Expense'],
    data: [500,500,500,0,500,500,500,0,500,500,500,500],
    backgroundColor: expenseColors[1],
    borderColor: 'rgb(255, 255, 255)'
  },
  {
    label: ['Another One'],
    data: [200,500,300,100,1000,200,50,0,100,500,25,500],
    backgroundColor: expenseColors[2],
    borderColor: 'rgb(255, 255, 255)'
  }
];

var defaultCategories = ['Takout','Groceries','Rent','Mortgage','Entertainment','Subscriptions','Recreation','Utilities'];

var defaultState = {
  xLabels: defaultDates,
  dataEntries: defaultData,
  incomeColors: incomeColors,
  expenseColors: expenseColors,
  assets: defaultAssets,
  savedCharts: [],
  categories: defaultCategories
}

var store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;