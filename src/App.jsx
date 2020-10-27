import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation.jsx';
import Chart from './components/Chart.jsx';
import Inputs from './components/Inputs.jsx';


var App = (props) => {
  return (
    <div>
      <Navigation/>
      <Chart/>
      <Inputs/>
    </div>
  )
}

var root  = document.getElementById('app');
ReactDOM.render(<App/>, root);