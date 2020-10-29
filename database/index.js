var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MVP', { useNewUrlParser: true })
  .then(()=> {console.log('Connected to the db')})
  .catch(error => handleError(error));

  const chartSchema = new mongoose.Schema({
    username: String,
    chartname: String,
    labels: Array,
    assets: Number,
    dataPoints: Array,
    categories: Array
   });


   const Chart = mongoose.model('charts', chartSchema);

   module.exports.Chart = Chart;