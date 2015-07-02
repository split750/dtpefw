var express = require('express');
var app = express();
var path = require('path');

// Load Express Configuration
require('./expressConfig')(app, express);


// Root route

/*
app.use(express.static(path.join(__dirname, '../app/')));
*/

/*
app.get('/', function(req, res){
  res.sendFile('index.html', { root: path.join(__dirname, '../app/views') });
});
*/

// Load routes
require('./routes/user')(app); //user routes
require('./routes/note')(app); // note routes
require('./routes/category')(app); // category routes
require('./routes/wasteType')(app);
require('./routes/contractType')(app);

module.exports = app;
