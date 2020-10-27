import React from 'react';
import Navigation from './components/Navigation.jsx';
import BudgetWidgetContainer from './redux/containers/BudgetWidgetContainer.js';


var App = (props) => {
  return (
    <div>
      <Navigation/>
      <BudgetWidgetContainer/>
    </div>
  )
}

export default App;