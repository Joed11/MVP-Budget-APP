import React, {useState, useEffect} from 'react';
import InputListContainer from '../redux/containers/InputListContainer.js';

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
      <InputListContainer />
    </div>
  )
}

export default Inputs;

