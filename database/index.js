var mongoose = require('mongoose');
var dbHost = process.env.DB_HOST;
var dbName = process.env.DB_NAME;
var dbUser = process.env.DB_USER;
var dbPw = process.env.DB_PASSWORD;

mongoose.connect(`mongodb://${dbUser}:${dbPw}@${dbHost}/${dbName}?authSource=admin`, { useNewUrlParser: true })
  .then(()=> {console.log('Connected to the db')})
  .catch(error => console.log('error connecting to db', error));

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

