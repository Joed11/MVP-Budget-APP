import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2';

var BudgetChart = (props) => {

  var chartData = {
    labels: props.labels
  }

  chartData.datasets = props.dataPoints.map((point) => {
    point.chartData.order = 2;
    point.chartData.yAxisID = 'A';
    return point.chartData
  })

  var assets = 50000

  chartData.datasets.push({
      label: ['Assets'],
      type: 'line',
      data: [50000,60000,70000,80000,90000,100000,90000,80000,70000,60000,50000,40000],
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgb(0, 50, 200)',
      order: 1,
      yAxisID: 'B'
    })

  var chartOptions = {
    maintainAspectRatio: true,
    legend: {
      display: true,
      labels: {
          fontColor: 'rgb(0, 0, 0)'
      }
    },
    scales: {
      xAxes: [{
        stacked: true,
        barPercentage: 0.6,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        scaleLabel: {
          display: true,
          labelString: 'Timeline',
          fontColor: 'rgb(0, 0, 0)'
        }
      }],
      yAxes: [{
          id: 'A',
          stacked: true,
          ticks: {
            beginAtZero: true
          },
          position: 'right',
          scaleLabel: {
            display: true,
            labelString: 'Monthly Budget'
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }
        }, {
          id: 'B',
          type: 'linear',
          position: 'left',
          ticks: {
            beginAtZero: true,
            fontColor: 'rgb(0, 50, 200)'
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Assets',
            fontColor: 'rgb(0, 50, 200)'
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
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