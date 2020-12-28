import axios from 'axios';

export const getCharts = (usernameInput,updateSavedCharts) => {
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

export const saveChart = (username, chartName, assets, labels, dataPoints, categories, savedCharts, updateSavedCharts) => {

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