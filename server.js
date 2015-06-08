var express = require('express'),
    path = require('path'),
    http = require('http'),
    plant = require('./routes/plant');

var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var app = express();

var server = require('http').createServer(app);
var port = process.env.PORT || 1337;

// Routing
app.use(express.static(__dirname + '/public'));



//app.use(express.bodyParser());
//app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride());

// Socket.io
var io = require('socket.io').listen(server);

app.get('/plants', plant.findAll);
app.get('/plants/:id', plant.findById);
app.post('/plants', plant.addPlant);
app.put('/plants/:id', plant.updatePlant);
app.delete('/plants/:id', plant.deletePlant);

server.listen(port, function () {
    console.log("Express server listening on port " + port);
});
