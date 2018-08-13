//CONFIGURE MONGODB
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27018/Cloop');

module.exports = {mongoose};
