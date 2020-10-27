const EXPRESS = require('express');
const MORGAN = require('morgan');
const HELMET = require('helmet');
const BODYPARSER = require('body-parser');
const PATH = require('path');
const PORT = process.env.PORT || 3005;

const APP = EXPRESS();

APP.use(EXPRESS.static(PATH.join(__dirname, './public')));

APP.use(MORGAN('common'));
APP.use(HELMET());
APP.use(BODYPARSER.json());

APP.get('/', (req, res) => {
  res.send('index');
});

APP.listen(PORT, () => {
  console.log(`App is listenting on ${PORT}`);
});