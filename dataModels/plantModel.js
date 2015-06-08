var mongoose = require('mongoose'), 
  Schema = mongoose.Schema;

var PlantSchema = new Schema({
    bu: String,
    region: String,
    name: String,
    year: Number,
    grapes: String,
    country: String,
    description: String,
    picture: String
});

module.exports = mongoose.model('PlantModel', PlantSchema);