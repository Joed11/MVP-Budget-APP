import React from 'react';

var InputField = (props) => {
  return (
    <div className="input-field-entry-container">
      <p className="input-field input-id">{props.id}</p>
      <input className="input-field input-amount" type="text" value={props.amount}></input>
      <input className="input-field input-type" type="text" value={props.type}></input>
      <input className="input-field input-category" type="text" value={props.category}></input>
      <input className="input-field input-months" type="text"></input>
    </div>
  )
}

export default InputField;