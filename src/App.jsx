import React from 'react';
import Navigation from './components/Navigation.jsx';
import InputsContainer from './redux/containers/InputsContainer.js';
import BudgetChartContainer from './redux/containers/BudgetChartContainer.js';


var App = (props) => {
  return (
    <div>
      <Navigation/>
      <BudgetChartContainer />
      <InputsContainer/>
    </div>
  )
}

export default App;