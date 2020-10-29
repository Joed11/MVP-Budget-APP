import React, {useState , useEffect} from 'react';
import axios from 'axios';

var Navigation = (props) => {
  const [assets, setAssets] = useState(props.assets);
  const [username, setUsername] = useState(props.username);
  const [savedCharts, setSavedCharts] = useState(props.savedCharts);
  const [selectedChart, setSelectedChart] = useState(null);
  const [chartName, setChartName] = useState('');

  useEffect(() => {
    props.updateAssets(assets);
  }, [assets])

  useEffect(() => {
    props.updateUsername(username);
  }, [username])

  useEffect(() => {
    props.updateSavedCharts(savedCharts);
  }, [savedCharts])

  useEffect(() => {
    console.log(selectedChart)
    if (selectedChart !== null) {
      props.updateAssets(selectedChart.assets);
      props.updateLabels(selectedChart.labels);
      props.updateDataPoints(selectedChart.dataPoints);
      props.updateCategories(selectedChart.categories);
    }
  }, [selectedChart])

  return (
    <div className="nav-container">
      <div className="navigation-container">
        <p className="input-nav-label">Username:</p>
        <input className="input-nav-input" type='text' onChange={(e)=> setUsername(e.target.value)} value={username}></input>
        <button className="input-nav-button" onClick={() => getCharts(username, setSavedCharts)}>GET MY CHARTS</button>
        <p className="input-nav-label">Starting Assets:</p>
        <input className="input-nav-input" type='number' onChange={(e)=> setAssets(e.target.value)} value={assets}></input>
        <p className="input-nav-label">My Charts</p>
        <select className="input-nav-input nav-charts" onChange={(e) => {
          var chartName = e.target.value
            for (let i = 0; i < savedCharts.length; i += 1) {
              if (savedCharts[i].chartname === chartName) {
                setSelectedChart(savedCharts[i]);
                return;
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
          saveChart(props.username, chartName, props.assets, props.labels, props.dataPoints, props.categories, props.savedCharts, setSavedCharts)
        }
      }>SAVE CHART</button>
    </div>
  )
}

export default Navigation;

var getCharts = (usernameInput,setSavedCharts) => {
  axios.get('/charts', {params: {
    username: usernameInput
    }
  })
    .then((response) => {
      console.log(response.data)
      setSavedCharts(response.data)
    })
    .catch((err) => {
      console.log('error retrieving charts')
    })
}

var saveChart = function (username, chartName, assets, labels, dataPoints, categories, savedCharts, setSavedCharts) {

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

  return axios.post('/charts', { newChart: newChartEntry })
    .then(() => {
      console.log('saved the chart');
      var savedChartsCopy = JSON.parse(JSON.stringify(savedCharts));
      savedChartsCopy.push(newChartEntry);
      console.log(savedChartsCopy)
      setSavedCharts(savedChartsCopy);
    })
    .catch((err) => {
      console.log('error saving the chart',err)
    })
}