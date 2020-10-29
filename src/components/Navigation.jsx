import React, {useState , useEffect} from 'react';
import axios from 'axios';

var incomeColors = ['rgba(51,204,255,0.7)', 'rgba(51,204,51,0.7)', 'rgba(51,204,204,0.7)', 'rgba(153,153,255,0.7)', 'rgba(0,102,153,0.7)'];

var expenseColors = ['rgba(255,0,0,0.7)', 'rgba(204,102,0,0.7)', 'rgba(153,0,153,0.7)', 'rgba(255,102,0,0.7)', 'rgba(255,204,0,0.7)'];

var defaultChart = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  assets: 50000,
  dataPoints: [
    {
      chartData: {
        label: ['Salary'],
        data: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
        backgroundColor: incomeColors[0],
        borderColor: 'rgb(0, 0, 0)'
      },
      amount: 1000,
      transactionType: { value: 'Income', label: 'Income' },
      category: { value: 'Salary', label: 'Salary' }
    },
    {
      chartData: {
        label: ['Rent'],
        data: [-500,-500,-500,-500,-500,-500,-500,-500,-500,-500,-500,-500],
        backgroundColor: expenseColors[1],
        borderColor: 'rgb(255, 255, 255)'
      },
      amount: 500,
      transactionType: { value: 'Expense', label: 'Expense' },
      category: { value: 'Rent', label: 'Rent' },
    },
    {
      chartData: {
        label: ['Utilities'],
        data: [-200,-200,-200,-200,-200,-200,-200,-200,-200,-200,-200,-200],
        backgroundColor: expenseColors[2],
        borderColor: 'rgb(255, 255, 255)'
      },
      amount: 200,
      transactionType: { value: 'Expense', label: 'Expense' },
      category: { value: 'Utilities', label: 'Utilities' }
    }
  ],
  categories: [
    { value: 'Salary', label: 'Salary' },
    { value: 'Takeout', label: 'Takeout' },
    { value: 'Groceries', label: 'Groceries' },
    { value: 'Rent', label: 'Rent' },
    { value: 'Mortgage', label: 'Mortgage' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Subscriptions', label: 'Subscriptions' },
    { value: 'Recreation', label: 'Recreation' },
    { value: 'Utilities', label: 'Utilities' },
    { value: 'Misc.', label: 'Misc.' }
  ]
}

var Navigation = (props) => {
  const [assets, setAssets] = useState(props.assets);
  const [username, setUsername] = useState(props.username);
  const [savedCharts, setSavedCharts] = useState(props.savedCharts);
  const [selectedChart, setSelectedChart] = useState(defaultChart);
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
          var localChartName = e.target.value
            for (let i = 0; i < savedCharts.length; i += 1) {
              if (savedCharts[i].chartname === localChartName) {
                setSelectedChart(savedCharts[i]);
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
      console.log('get chart response data', response.data)
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

  console.log(newChartEntry);

  return axios.post('/charts', { newChart: newChartEntry })
    .then(() => {
      console.log('saved the chart');
      var savedChartsCopy = JSON.parse(JSON.stringify(savedCharts));
      savedChartsCopy.push(newChartEntry);
      console.log('savedChartsCopy',savedChartsCopy)
      setSavedCharts(savedChartsCopy);
    })
    .catch((err) => {
      console.log('error saving the chart',err)
    })
}