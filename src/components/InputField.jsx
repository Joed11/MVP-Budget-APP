import React, {useState, useEffect} from 'react';
import Select from 'react-select';

var monthOptions = [
  { value: 'Jan', label: 'Jan' },
  { value: 'Feb', label: 'Feb' },
  { value: 'Mar', label: 'Mar' },
  { value: 'Apr', label: 'Apr' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'Aug', label: 'Aug' },
  { value: 'Sep', label: 'Sep' },
  { value: 'Oct', label: 'Oct' },
  { value: 'Nov', label: 'Nov' },
  { value: 'Dec', label: 'Dec' },
]

var typeOptions = [
  { value: 'Income', label: 'Income' },
  { value: 'Expense', label: 'Expense' },
]

var InputField = (props) => {

  return (
    <div className="input-field-entry-container">
      <p className="input-field input-id">{props.id}</p>
      <p className="input-field input-dollarSign">$</p>
      <input className="input-field input-amount" type="number" defaultValue={props.amount}></input>
      <Select
        className="input-field input-type"
        closeMenuOnSelect={true}
        defaultValue={[props.transactionType]}
        options={typeOptions}
      />
      <Select
        className="input-field input-category"
        closeMenuOnSelect={true}
        defaultValue={[props.category]}
        options={props.categories}
      />
      <Select
        className="input-field input-months"
        closeMenuOnSelect={false}
        defaultValue={[monthOptions[0]]}
        isMulti
        options={monthOptions}
      />
    </div>
  )
}

export default InputField;