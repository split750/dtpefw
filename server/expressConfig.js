var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var http = require('http');
var path = require('path');

module.exports = function(app, express) {
  // Serve static assets from the app folder. This enables things like javascript
  // and stylesheets to be loaded as expected. You would normally use something like
  // nginx for this, but this makes for a simpler demo app to just let express do it.
  /*
  app.use("/", express.static(path.join(__dirname, '../app/')));
  */

  /*
  // Set the view directory, this enables us to use the .render method inside routes
  app.set('views', path.join(__dirname, '../app/views'));
  */

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse application/json
  app.use(bodyParser.json());

  app.use(logger('dev'));
  app.use(methodOverride());
};


/********* DATABASE - MONGOLAB CONNECTION ********/

var mongoose = require('mongoose');               // mongoose for mongodb
var database = require('./database');      // load the database config

mongoose.connect(database.url);   // connect to mongoDB database on modulus.io

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));  
 
var dbOpened = db.once('open', function() {
    // Wait for the database connection to establish, then start the app.  
    console.log('connection to mongolab OK');   
});