import React from 'react';
import NavigationContainer from './redux/containers/NavigationContainer.js';
import InputsContainer from './redux/containers/InputsContainer.js';
import BudgetChartContainer from './redux/containers/BudgetChartContainer.js';


var App = (props) => {
  return (
    <div>
      <NavigationContainer/>
      <BudgetChartContainer />
      <InputsContainer/>
    </div>
  )
}

export default App;