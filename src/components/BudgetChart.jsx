import React, {useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

var BudgetChart = (props) => {

  const [localChartData, setLocalChartData] = useState([])

  useEffect(() => {
    var chartData = {
      labels: props.labels
    }

    var dataLabelTracker = {};

    var chartDataArray = props.dataPoints.map((newPoint) => {
      console.log(newPoint)
      if (newPoint) {
        var point = JSON.parse(JSON.stringify(newPoint))
        if (dataLabelTracker.hasOwnProperty(point.chartData.label[0])) {
          dataLabelTracker[point.chartData.label[0]] += 1;
          point.chartData.label[0] += dataLabelTracker[point.chartData.label[0]];
        } else {
          dataLabelTracker[point.chartData.label[0]] = 1;
        }
        point.chartData.order = 2;
        point.chartData.yAxisID = 'A';
        point.chartData.barPercentage = .6;
        return point.chartData
      }
    })

    chartData.datasets = chartDataArray

    var assetsNumber = parseInt(props.assets)

    var assetData = buildAssetsData(assetsNumber, chartDataArray);

    chartData.datasets.push({
        label: ['Assets'],
        type: 'line',
        data: JSON.parse(JSON.stringify(assetData)),
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgb(0, 50, 200)',
        order: 1,
        yAxisID: 'B'
      })

      console.log('local chart data budget chart', chartData);
      setLocalChartData(chartData);
  }, [props.dataPoints,props.assets])

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
          data={JSON.parse(JSON.stringify(localChartData))}
          options={chartOptions}/>
      </div>
  )
}

export default BudgetChart;

var buildAssetsData = (startingAssets, dataArray) => {
  var assetArray = [0,0,0,0,0,0,0,0,0,0,0,0];
  var assets = startingAssets;
  for (let i = 0; i < assetArray.length; i += 1) {
    dataArray.forEach((dataPoint) => {
      assets += dataPoint.data[i]
    })
    assetArray[i] = assets;
  }
  return assetArray;
}