require('dotenv').config()
const EXPRESS = require('express');
const MORGAN = require('morgan');
const HELMET = require('helmet');
const BODYPARSER = require('body-parser');
const PATH = require('path');
const PORT = process.env.PORT || 3005;
const chartModel = require('./dbModel/chartModels').chartModel

const APP = EXPRESS();

APP.use(EXPRESS.static(PATH.join(__dirname, './dist')));

APP.use(MORGAN('common'));
APP.use(HELMET());
APP.use(BODYPARSER.json());

APP.get('/', (req, res) => {
  res.send('index');
});

APP.post('/charts', (req, res) => {
  console.log(req.body)
  chartModel.saveChart(req.body.newChart)
    .then(() => {
      res.status(200).send('Saved the chart');
    })
    .catch((err) => {
      res.status(404).send('Error saving the chart');
    })
});

APP.get('/charts', (req, res) => {
  console.log(req.query)
  chartModel.getCharts(req.query.username)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(404).send('No charts for you');
    })
});

//

APP.listen(PORT, () => {
  console.log(`App is listenting on ${PORT}`);
});