import React, {useState, useEffect} from 'react';
import Inputs from './Inputs.jsx';
import BudgetChartContainer from '../redux/containers/BudgetChartContainer.js';

var BudgetWidget = function(props) {

  const [categories, setCategories] = useState(props.categoryList);
  const [updateChart, triggerUpdateChart] = useState(false);

  useEffect(() => {
    if (updateChart === true) {
      var incomeColorIdx = 0;
      var expenseColorIdx = 0;
      var newData = [];
      categories.forEach((entry)=> {
        var newItem = {};
        newItem.label = entry.name
        newItem.data = [];
        for (let i = 0; i < labels.length; i += 1) {
          newItem.data.push(entry.monthValue[i]);
        }
        newItem.type = entry.type;
        if (entry.type === income) {
          newItem.backgroundColor = props.incomeColors[incomeColorIdx];
          incomeColorIdx += 1;
          if (incomeColorIdx >= props.incomeColors.length) {
            incomeColorIdx = 0;
          }
        } else {
          newItem.backgroundColor = props.expenseColors[expenseColorIdx];
          expenseColorIdx += 1;
          if (expenseColorIdx >= props.expenseColors.length) {
            expenseColorIdx = 0;
          }
        }
        newData.push(newItem);
      });
      setData(newData);
      triggerUpdateChart(false);
    }
  }, [updateChart, categories])

  return (
    <div>
      <BudgetChartContainer />
      <Inputs categories={categories} setCategories={setCategories}/>
    </div>
  )
}

export default BudgetWidget;