import React, {useState} from 'react';
import InputField from './InputField.jsx';

var blankEntry = () => {
  return {
    id: 0,
  amount: 0,
  type: 'INCOME',
  category: '',
  months: {}
  }
}

var Inputs = (props) => {
  const [entries, setEntries] = useState(props.categories);

  return (
    <div>
      <div className="input-header-container">
        <h4 className="input-header">ITEM</h4>
        <h4 className="input-header">AMOUNT</h4>
        <h4 className="input-header">TYPE</h4>
        <h4 className="input-header">CATEGORY</h4>
        <h4 className="input-header">MONTHS</h4>
      </div>
      {makeFields(entries)}
      <input id="new-category-name" type="text" placeholder="Category Name..."></input>
      <button onClick={() => {
        var newEntryList = entries;
        var newEntry = blankEntry();
        var nameInput = document.getElementById('new-category-name')
        newEntry.category = nameInput.value;
        newEntryList.push(newEntry);
        nameInput.value = '';
        setEntries(newEntryList);
      }}>ADD ITEM</button>
    </div>
  )
}

export default Inputs;

var makeFields = (entries) => {
  var counter = 0;
  return entries.map((entry) => {
    return <InputField
    id={counter}
    amount={entry.amount}
    type={entry.type}
    category={entry.category}
    months={entry.months}/>
    counter += 1;
  })
}