var express = require('express');
var app = express();

// Load Express Configuration
require('./expressConfig')(app, express);

// Root route

app.use(express.static(__dirname + '../app/assets/'));

app.get('/', function(req, res){
  res.sendfile('./app/views/index.html');
});

// Load routes
require('./routes/user')(app); //user routes
require('./routes/note')(app); // note routes
require('./routes/category')(app); // category routes
require('./routes/wasteType')(app);
require('./routes/contractType')(app);

module.exports = app;
