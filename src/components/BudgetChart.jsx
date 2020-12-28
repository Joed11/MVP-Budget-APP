import React, {useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

var BudgetChart = (props) => {

  console.log('default chart', props.defaultChart)
  const [localChartData, setLocalChartData] = useState(props.defaultChart)

  useEffect(() => {
    console.log('starting render data points', props.dataPoints)
    console.log('starting render localData', localChartData)
    var labelCopy = JSON.parse(JSON.stringify(props.labels))

    var chartData = {
      labels: labelCopy
    }

    var newDataPoints = JSON.parse(JSON.stringify(props.dataPoints))

    var dataLabelTracker = {};

    console.log('newDataPoints',newDataPoints)

    var chartDataArray = newDataPoints.map((newPoint) => {
        console.log('newPoint', newPoint)
        var point = JSON.parse(JSON.stringify(newPoint))
        if (dataLabelTracker.hasOwnProperty(point.chartData.label[0])) {
          dataLabelTracker[point.chartData.label[0]] += 1;
          point.chartData.label[0] = point.chartData.label[0] + dataLabelTracker[point.chartData.label[0]];
        } else {
          dataLabelTracker[point.chartData.label[0]] = 1;
        }
        point.chartData.order = 2;
        point.chartData.yAxisID = 'A';
        point.chartData.barPercentage = .6;
        return point.chartData
    })

    console.log('chartDataArray',chartDataArray)

    chartData.datasets = JSON.parse(JSON.stringify(chartDataArray))

    var assetsNumber = parseInt(props.assets)

    var chartDataArrayCopy = JSON.parse(JSON.stringify(chartDataArray))

    var assetData = buildAssetsData(assetsNumber, chartDataArrayCopy);

    console.log('assetData',chartDataArray)

    chartData.datasets.push({
        label: ['Assets'],
        type: 'line',
        data: JSON.parse(JSON.stringify(assetData)),
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgb(0, 50, 200)',
        order: 1,
        yAxisID: 'B'
      })

      var chartDataCopy = JSON.parse(JSON.stringify(chartData));
      console.log('local chart data budget chart', chartDataCopy);
      setLocalChartData(chartDataCopy);
  }, [props.dataPoints, props.assets])

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
          data={localChartData}
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