import React, {useState , useEffect} from 'react';
import { getCharts, saveChart } from '../helpers/chartRequests.js';

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