import React, {useState, useEffect} from 'react';
import InputList from './InputList.jsx';

var Inputs = (props) => {

  return (
    <div className="input-section">
      <div className="input-header-container">
        <h4 className="input-header input-header-item">ITEM</h4>
        <h4 className="input-header input-header-amount">AMOUNT</h4>
        <h4 className="input-header input-header-type">TYPE</h4>
        <h4 className="input-header input-header-category">CATEGORY</h4>
        <h4 className="input-header input-header-month">MONTHS</h4>
      </div>
      <InputList dataList={props.dataPoints} categories={props.categories}/>
      <button onClick={() => {
        var newDataPoints = props.dataPoints.slice(0);
        var newDataEntry = makeNewEntry();
        newDataPoints.push(newDataEntry)
        props.updateDataPoints(newDataPoints);
        console.log(newDataPoints)
      }}>Add New Item</button>
      <button onClick={() => {
        console.log('clicked')
      }}>Update Chart</button>
    </div>
  )
}

export default Inputs;

var incomeColors = ['rgba(51,204,255,0.7)', 'rgba(51,204,51,0.7)', 'rgba(51,204,204,0.7)', 'rgba(153,153,255,0.7)', 'rgba(0,102,153,0.7)'];

var makeNewEntry = function () {
  var randomIdx = Math.floor(Math.random() * Math.floor(4))
  var obj = {
  chartData: {
    label: ['Misc.'],
    data: [0,0,0,0,0,0,0,0,0,0,0,0],
    backgroundColor: incomeColors[randomIdx],
    borderColor: 'rgb(255, 255, 255)'
  },
  amount: 0,
  transactionType: { value: 'Income', label: 'Income' },
  category: { value: 'Misc.', label: 'Misc.' },
  months: {
    'Jan': true,
    'Feb': true,
    'Mar': true,
    'Apr': true,
    'June': true,
    'July': true,
    'Aug': true,
    'Sep': true,
    'Oct': true,
    'Nov': true,
    'Dec': true,
  }
}
return obj;
}