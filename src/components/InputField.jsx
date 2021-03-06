import React, {useState, useEffect} from 'react';
import Select from 'react-select';

var monthOptions = [
  { value: 0, label: 'Jan' },
  { value: 1, label: 'Feb' },
  { value: 2, label: 'Mar' },
  { value: 3, label: 'Apr' },
  { value: 4, label: 'May' },
  { value: 5, label: 'June' },
  { value: 6, label: 'July' },
  { value: 7, label: 'Aug' },
  { value: 8, label: 'Sep' },
  { value: 9, label: 'Oct' },
  { value: 10, label: 'Nov' },
  { value: 11, label: 'Dec' },
]

var typeOptions = [
  { value: 'Income', label: 'Income' },
  { value: 'Expense', label: 'Expense' },
]

var categoryOptions = [
  { value: 'Salary', label: 'Salary' },
  { value: 'Takeout', label: 'Takeout' },
  { value: 'Groceries', label: 'Groceries' },
  { value: 'Rent', label: 'Rent' },
  { value: 'Mortgage', label: 'Mortgage' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Subscriptions', label: 'Subscriptions' },
  { value: 'Recreation', label: 'Recreation' },
  { value: 'Utilities', label: 'Utilities' },
  { value: 'Misc.', label: 'Misc.' }
]

var incomeColorCounter = 0;
var expenseColorCounter = 0;

var incomeColors = ['rgba(51,204,255,0.7)', 'rgba(51,204,51,0.7)', 'rgba(51,204,204,0.7)', 'rgba(153,153,255,0.7)', 'rgba(0,102,153,0.7)'];

var expenseColors = ['rgba(255,0,0,0.7)', 'rgba(204,102,0,0.7)', 'rgba(153,0,153,0.7)', 'rgba(255,102,0,0.7)', 'rgba(255,204,0,0.7)'];

var InputField = (props) => {

  const [amount, setAmount] = useState(parseInt(props.amount));
  const [type, setType] = useState(props.transactionType);
  const [category, setCategory] = useState(props.category);
  const [months, setMonths] = useState(props.months);

  useEffect(()=>{
    var newChart = JSON.parse(JSON.stringify(props.currentData));
    var color;
    if (type.value === 'Expense') {
      color = expenseColors[expenseColorCounter];
      expenseColorCounter += 1;
      if (expenseColorCounter >= expenseColors.length) {
        expenseColorCounter = 0;
      }
    }
    if (type.value === 'Income') {
      color = incomeColors[incomeColorCounter]
      incomeColorCounter += 1;
      if (incomeColorCounter >= incomeColors.length) {
        incomeColorCounter = 0;
      }
    }

    var newDataEntry = {
      chartData: {
        label: [category.value],
        data: buildDataArray(months, amount, type),
        backgroundColor: color,
        borderColor: 'rgb(0, 0, 0)'
      },
      amount: amount,
      transactionType: type,
      category: category,
      months: months
    }

    newChart[props.id] = newDataEntry;

    props.updateData(newChart);
  }, [amount, type, category, months])

  return (
    <div className="input-field-entry-container">
      <p className="input-field input-id">{props.id}</p>
      <p className="input-field input-dollarSign">$</p>
      <input
        className="input-field input-amount"
        type="number"
        value={parseInt(props.amount)}
        onChange={(e) => setAmount(e.target.value)}>
      </input>
      <Select
        className="input-field input-type"
        closeMenuOnSelect={true}
        value={props.transactionType}
        onChange={(val) => setType(val)}
        options={typeOptions}
      />
      <Select
        className="input-field input-category"
        closeMenuOnSelect={true}
        value={props.category}
        onChange={(val) => setCategory(val)}
        options={categoryOptions}
      />
      <Select
        className="input-field input-months"
        value={props.months}
        closeMenuOnSelect={false}
        onChange={(val) => setMonths(val)}
        isMulti
        options={monthOptions}
      />
      <button
      className="input-field input-remove"
      onClick={() => {
        var chartDataPointsCopy = JSON.parse(JSON.stringify(props.currentData));
        var splicedField = chartDataPointsCopy.splice(props.id,1);
        console.log('input field after splice', splicedField)
        props.updateData(chartDataPointsCopy);
      }}>Remove</button>
    </div>
  )
}

export default InputField;


var buildDataArray = (months, amount, type) => {
  var data = [0,0,0,0,0,0,0,0,0,0,0,0];
  var value = amount;
  if (type.value === 'Expense') {
    value = amount * -1;
  }
  if (months.length) {
    months.forEach((month) => {
      if (month.value !== null) {
        data[month.value] = parseInt(value);
      }
    })
  } else {
    for (let i = 0; i < data.length; i += 1) {
      data[i] = value;
    }
  }
  return data;
}