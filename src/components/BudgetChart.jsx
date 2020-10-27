import React from 'react';
import Inputs from './Inputs.jsx';
import {Bar} from 'react-chartjs-2';

class BudgetChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charData:{
          labels: ['Jan','Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets:[
            {
              label: ['Income'],
              data: [1000,800,1000,800,1000,1000,1000,1000,1000,1000,1000,1000],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(0, 0, 0)'
            },
            {
              label: ['Expense'],
              data: [500,1200,500,500,500,500,600,500,500,500,500,500],
              backgroundColor: 'rgba(100, 50, 70, 0.2)',
              borderColor: 'rgb(0, 0, 0)'
            }
          ]
        },
        charOptions: {
          maintainAspectRatio: true,
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
               stacked: true,
               ticks: {
                beginAtZero: true
                }
            }]
          }
        }
    }
  }


  render() {
    return (
    <div>
      <div className="chart">
        <Bar
          data={this.state.charData}
          options={this.state.charOptions}/>
      </div>
      <Inputs/>
    </div>
  )}
}

export default BudgetChart;