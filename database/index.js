var mongoose = require('mongoose');
var dbHost = process.env.DB_HOST || '127.0.0.1:27017';
var dbName = process.env.DB_NAME || 'MVP';

mongoose.connect(`mongodb://${dbHost}/${dbName}`, { useNewUrlParser: true })
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