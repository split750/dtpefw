// import the mongoose package
var mongoose = require('mongoose'); // import the model
 
// define the schema
var todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  comment: String,
  done: { type: Boolean, "default": false },
  dateSaved: { type: Date, "default": Date.now }
});
 
// compile schema into a model
var Todo = mongoose.model('Todo', todoSchema);
 
// expose the schema
module.exports = Todo;