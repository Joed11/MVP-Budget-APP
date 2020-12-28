import React from 'react';
import NavigationContainer from './redux/containers/NavigationContainer.js';
import Inputs from './components/Inputs.jsx';
import BudgetChartContainer from './redux/containers/BudgetChartContainer.js';


var App = (props) => {
  return (
    <div>
      <NavigationContainer/>
      <BudgetChartContainer/>
      <Inputs/>
    </div>
  )
}

export default App;