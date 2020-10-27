import React from 'react';

var InputField = (props) => {
  return (
    <div className="input-field-entry-container">
      <p className="input-id" value={props.id}></p>
      <input className="input-amount" type="number" value={props.amount}></input>
      <input className="input-type" type="text" value={props.type}></input>
      <input className="input-category" type="text" value={props.category}></input>
      <input className="input-months" type="text"></input>
    </div>
  )
}

export default InputField;