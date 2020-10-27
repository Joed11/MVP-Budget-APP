import React from 'react';
import Inputs from './Inputs.jsx';
import {Bar} from 'react-chartjs-2';

class BudgetChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charHeight: '100%',
      charData:{
          labels: ['Jan','Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
              label: 'Budget',
              data: [1000, 1200, 800, 1300, 950, 900, 1000, 600, 1200, 500, 450, 1250],
          }]
        },
        charOptions: {
          maintainAspectRatio: true,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
        }
    };
}


  render() {
    return (
    <div>
      <div className="chart">
        <Bar
          data={this.state.charData}
          options={this.state.charOptions}
          height={this.state.charHeight}/>
      </div>
      <Inputs/>
    </div>
  )}
}

export default BudgetChart;