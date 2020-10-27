import React from 'react';
import {Bar} from 'react-chartjs-2';

class BudgetChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charData:{
          labels: this.props.labels,
        datasets: this.props.data
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
      <div className="chart">
        <Bar
          data={this.state.charData}
          options={this.state.charOptions}/>
      </div>
  )}
}

export default BudgetChart;