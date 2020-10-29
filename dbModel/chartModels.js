const Chart = require('../database').Chart;

module.exports.chartModel = {
  saveChart: (chartData) => {
    return Chart.findOneAndUpdate({
      chartname: chartData.chartname,
      username: chartData.username
    }, chartData,
    {upsert: true}).exec()
      .then(() => {
        console.log('saved the chart')
      })
      .catch((err) => {
        console.log('did not save the chart', err)
      })
  },
  getCharts: (username) => {
    return Chart.find({
      username: username
    }).exec()
    .then((results) => {
      console.log('got the charts');
      return results;
    })
    .catch((err) => {
      console.log('did not get the charts', err)
    })
  }
}