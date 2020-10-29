import { createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/main.js';

var incomeColors = ['rgba(51,204,255,0.7)', 'rgba(51,204,51,0.7)', 'rgba(51,204,204,0.7)', 'rgba(153,153,255,0.7)', 'rgba(0,102,153,0.7)'];

var expenseColors = ['rgba(255,0,0,0.7)', 'rgba(204,102,0,0.7)', 'rgba(153,0,153,0.7)', 'rgba(255,102,0,0.7)', 'rgba(255,204,0,0.7)'];

var defaultChart = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  assets: 50000,
  dataPoints: [
    {
      chartData: {
        label: ['Salary'],
        data: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
        backgroundColor: incomeColors[0],
        borderColor: 'rgb(0, 0, 0)'
      },
      amount: 1000,
      transactionType: { value: 'Income', label: 'Income' },
      category: { value: 'Salary', label: 'Salary' }
    },
    {
      chartData: {
        label: ['Rent'],
        data: [-500,-500,-500,-500,-500,-500,-500,-500,-500,-500,-500,-500],
        backgroundColor: expenseColors[1],
        borderColor: 'rgb(255, 255, 255)'
      },
      amount: 500,
      transactionType: { value: 'Expense', label: 'Expense' },
      category: { value: 'Rent', label: 'Rent' },
    },
    {
      chartData: {
        label: ['Utilities'],
        data: [-200,-200,-200,-200,-200,-200,-200,-200,-200,-200,-200,-200],
        backgroundColor: expenseColors[2],
        borderColor: 'rgb(255, 255, 255)'
      },
      amount: 200,
      transactionType: { value: 'Expense', label: 'Expense' },
      category: { value: 'Utilities', label: 'Utilities' }
    }
  ],
  categories: [
    { value: 'Salary', label: 'Salary' },
    { value: 'Takeout', label: 'Takeout' },
    { value: 'Groceries', label: 'Groceries' },
    { value: 'Rent', label: 'Rent' },
    { value: 'Mortgage', label: 'Mortgage' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Subscriptions', label: 'Subscriptions' },
    { value: 'Recreation', label: 'Recreation' },
    { value: 'Utilities', label: 'Utilities' },
    { value: 'Misc.', label: 'Misc.' }
  ]
}

var defaultState = {
  labels: defaultChart.labels,
  dataPoints: defaultChart.dataPoints,
  incomeColors: incomeColors,
  expenseColors: expenseColors,
  assets: defaultChart.assets,
  categories: defaultChart.categories,
  savedCharts: [defaultChart],
  username: ''
}

var store = createStore(rootReducer, defaultState);

export default store;