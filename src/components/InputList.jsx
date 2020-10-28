import React, {useState, useEffect} from 'react';
import InputField from './InputField.jsx';

var InputList = (props) => {

  const [newChartData, setNewChartData] = useState(props.dataPoints);

  useEffect(() => {
    props.updateDataPoints(newChartData);
  }, [newChartData])

  return (
  <div className="data">
    {props.dataPoints.map((entry,idx) => {
      return <InputField
        id={idx}
        amount={entry.amount}
        transactionType={entry.transactionType}
        category={entry.category}
        categories={props.categories}
        updateData={setNewChartData.bind(this)}
        currentData={newChartData}/>
    })}
    <button onClick={() => {
        var newDataPoints = props.dataPoints.slice(0);
        var newDataEntry = makeNewEntry(newChartData);
        newDataPoints.push(newDataEntry)
        setNewChartData(newDataPoints);
        console.log(newDataPoints)
      }}>Add New Item</button>
      <button onClick={() => {
        props.updateDataPoints(newChartData);
      }}>Update Chart</button>
  </div>
  )
}

export default InputList;

var incomeColors = ['rgba(51,204,255,0.7)', 'rgba(51,204,51,0.7)', 'rgba(51,204,204,0.7)', 'rgba(153,153,255,0.7)', 'rgba(0,102,153,0.7)'];

var makeNewEntry = function (newChartData) {
  var randomIdx = Math.floor(Math.random() * Math.floor(4))
  var obj = {
  chartData: {
    label: ['Misc.'],
    data: [100,100,100,100,100,100,100,100,100,100],
    backgroundColor: incomeColors[randomIdx],
    borderColor: 'rgb(255, 255, 255)'
  },
  amount: 100,
  transactionType: { value: 'Income', label: 'Income' },
  category: { value: 'Misc.', label: 'Misc.' }
}
return obj;
}