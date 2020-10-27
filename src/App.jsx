import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation.jsx';
import BudgetWidget from './components/BudgetWidget.jsx';


var App = (props) => {
  return (
    <div>
      <Navigation/>
      <BudgetWidget/>
    </div>
  )
}

var root  = document.getElementById('app');
ReactDOM.render(<App/>, root);