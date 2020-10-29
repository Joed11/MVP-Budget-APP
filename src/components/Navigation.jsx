import React, {useState , useEffect} from 'react';
import axios from 'axios';

var Navigation = (props) => {

  const [selectedChart, setSelectedChart] = useState(props.savedCharts[0]);
  const [chartName, setChartName] = useState('');

  useEffect(() => {
    console.log('selected', selectedChart)
    if (selectedChart !== null) {
      props.updateWholeChart(selectedChart.labels, selectedChart.assets, selectedChart.dataPoints, selectedChart.categories)
    }
  }, [selectedChart])

  return (
    <div className="nav-container">
      <div className="navigation-container">
        <p className="input-nav-label">Username:</p>
        <input className="input-nav-input" type='text' onChange={(e)=>  props.updateUsername(e.target.value)} value={props.username}></input>
        <button className="input-nav-button" onClick={() => getCharts(props.username, props.updateSavedCharts.bind(this))}>GET MY CHARTS</button>
        <p className="input-nav-label">Starting Assets:</p>
        <input className="input-nav-input" type='number' onChange={(e)=> props.updateAssets(e.target.value)} value={props.assets}></input>
        <p className="input-nav-label">My Charts</p>
        <select className="input-nav-input nav-charts" onChange={(e) => {
          var localChartName = e.target.value
            for (let i = 0; i < props.savedCharts.length; i += 1) {
              if (props.savedCharts[i].chartname === localChartName) {
                setSelectedChart(props.savedCharts[i]);
              }
            }
          }}>
          <option value={null} >None</option>
          {props.savedCharts.map((chart) => {
            return <option value={chart.name}>{chart.chartname}</option>
          })}
        </select>
      </div>
      <p className="input-nav-chartName-label">NAME YOUR CHART</p>
      <input className="input-nav-chartName" type='test' onChange={(e)=> setChartName(e.target.value)} value={chartName}></input>
      <button className="input-nav-save-button" onClick={()=> {
          saveChart(props.username, chartName, props.assets, props.labels, props.dataPoints, props.categories, props.savedCharts, props.updateSavedCharts.bind(this))
        }
      }>SAVE CHART</button>
    </div>
  )
}

export default Navigation;

var getCharts = (usernameInput,updateSavedCharts) => {
  axios.get('/charts', {params: {
    username: usernameInput
    }
  })
    .then((response) => {
      console.log('get chart response data', response.data)
      updateSavedCharts(response.data)
    })
    .catch((err) => {
      console.log('error retrieving charts')
    })
}

var saveChart = function (username, chartName, assets, labels, dataPoints, categories, savedCharts, updateSavedCharts) {

  if (!username.length || typeof username !== 'string') {
    alert('Invalid username');
    return;
  }

  if (!chartName.length || typeof chartName !== 'string') {
    alert('Invalid chart name');
    return;
  }

  var newChartEntry = {
    username: username,
    chartname: chartName,
    labels: labels,
    assets: assets,
    dataPoints: dataPoints,
    categories: categories
  }

  console.log(newChartEntry);

  return axios.post('/charts', { newChart: newChartEntry })
    .then(() => {
      console.log('saved the chart');
      var savedChartsCopy = JSON.parse(JSON.stringify(savedCharts));
      savedChartsCopy.push(newChartEntry);
      console.log('savedChartsCopy',savedChartsCopy)
      updateSavedCharts(savedChartsCopy);
    })
    .catch((err) => {
      console.log('error saving the chart',err)
    })
}