import React, {useState, useEffect} from 'react';
import Inputs from './Inputs.jsx';
import BudgetChart from './BudgetChart.jsx';


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
]

var BudgetWidget = function(props) {

  const [data, setData] = useState(defaultData);
  const [labels, setLabels] = useState(defaultDates);
  const [assets, setAssets] = useState(defaultAssets);
  const [categories, setCategories] = useState(defaultData);
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
          newItem.backgroundColor = incomeColors[incomeColorIdx];
          incomeColorIdx += 1;
          if (incomeColorIdx >= incomeColors.length) {
            incomeColorIdx = 0;
          }
        } else {
          newItem.backgroundColor = expenseColors[expenseColorIdx];
          expenseColorIdx += 1;
          if (expenseColorIdx >= expenseColors.length) {
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
      <BudgetChart labels={labels} data={data} assets={assets}/>
      <Inputs categories={categories} setCategories={setCategories}/>
    </div>
  )
}

export default BudgetWidget;