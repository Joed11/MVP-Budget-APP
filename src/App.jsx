import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation.jsx';
import BudgetChart from './components/BudgetChart.jsx';


var App = (props) => {
  return (
    <div>
      <Navigation/>
      <BudgetChart/>
    </div>
  )
}

var root  = document.getElementById('app');
ReactDOM.render(<App/>, root);