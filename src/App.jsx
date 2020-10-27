import React from 'react';
import ReactDOM from 'react-dom';

var App = (props) => {
  return (
    <div>
      <h2>I am the APP</h2>
    </div>
  )
}

var root  = document.getElementById('app');
ReactDOM.render(<App/>, root);