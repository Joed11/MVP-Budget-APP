import React from 'react';
import InputField from './InputField.jsx';

var InputList = (props) => {
  var counter = 0;
  return props.dataList.map((entry) => {
    return <InputField
      id={counter++}
      amount={entry.amount}
      transactionType={entry.transactionType}
      category={entry.category}
      months={entry.months}
      categories={props.categories}/>
  })
}

export default InputList;