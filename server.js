var express = require('express'),
    path = require('path'),
    http = require('http'),
    wine = require('./routes/wines');

//var bodyParser = require('body-parser');

var app = express();

var server = require('http').createServer(app);
var port = process.env.PORT || 1337;

// Routing
app.use(express.static(__dirname + '/public'));

//app.use(express.bodyParser());
//app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */


app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

server.listen(port, function () {
    console.log("Express server listening on port " + port);
});
