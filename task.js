var mongoose = require('mongoose'), 
  Schema = mongoose.Schema;

var BUSchema = new Schema({
  itemName      : String, 
  itemDescription  : String, 
});

module.exports = mongoose.model('BUModel', BUSchema);