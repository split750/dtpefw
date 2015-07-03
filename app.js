
//var app = require("./server/routes");

var express = require('express');
var app = express();
var path = require('path');


// Load Express Configuration
require('./server/expressConfig')(app, express);


// Load routes
require('./server/routes/user')(app); //user routes
require('./server/routes/note')(app); // note routes
require('./server/routes/category')(app); // category routes
require('./server/routes/wasteType')(app);
require('./server/routes/contractType')(app);



app.use(express.static(path.join(__dirname, './public/')));


app.get('/', function(req, res){
  res.sendFile('index.html', { root: path.join(__dirname, './public/views/') });
});


// Create server
var port = process.env.PORT || 1337;
var server = require('http').createServer(app);


// Start the server
server.listen(port, function() {
 console.log('Listening on port : ' + port);
});
