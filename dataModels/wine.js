var mongoose = require('mongoose'), 
  Schema = mongoose.Schema;

var WineSchema = new Schema({
    name: String,
    year: Number,
    grapes: String,
    country: String,
    region: String,
    description: String,
    picture: String
});

module.exports = mongoose.model('WineModel', WineSchema);