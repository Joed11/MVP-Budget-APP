import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2';

var BudgetChart = (props) => {

  var chartData = {
    labels: props.labels
  }

  chartData.datasets = props.dataPoints.map((point) => {
    return point.chartData
  })

  var chartOptions = {
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

  return (
      <div className="chart">
        <Bar
          data={chartData}
          options={chartOptions}/>
      </div>
  )
}

export default BudgetChart;