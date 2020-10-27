import React from 'react';
import Inputs from './Inputs.jsx';

class Chart extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div>
      <p>Im a chart component</p>
      <Inputs/>
    </div>
  )}
}

export default Chart;