import React, {useState , useEffect} from 'react';

var Navigation = (props) => {
  const [assets, setAssets] = useState(props.assets);
  const [username, setUsername] = useState(props.username);
  const [savedCharts, setSavedCharts] = useState(props.savedCharts);
  const [chartName, setChartName] = useState('');

  useEffect(() => {
    props.updateAssets(assets);
  }, [assets])


  return (
    <div className="nav-container">
      <div className="navigation-container">
        <p className="input-nav-label">Username:</p>
        <input className="input-nav-input" type='text' onChange={(e)=> setUsername(e.target.value)} value={username}></input>
        <button className="input-nav-button">GET MY CHARTS</button>
        <p className="input-nav-label">Starting Assets:</p>
        <input className="input-nav-input" type='number' onChange={(e)=> setAssets(e.target.value)} value={assets}></input>
        <p className="input-nav-label">My Charts</p>
        <select className="input-nav-input nav-charts">
          <option>None</option>
        </select>
      </div>
      <p className="input-nav-chartName-label">NAME THIS CHART</p>
      <input className="input-nav-chartName" type='test' onChange={(e)=> setChartName(e.target.value)} value={chartName}></input>
      <button className="input-nav-save-button">SAVE CURRENT CHART</button>
    </div>
  )
}

export default Navigation;