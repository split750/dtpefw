// Load core modules.
var path = require('path');

// Load third-party modules.
var express = require('express');
var bodyParser = require('body-parser');
//var parseUrlencoded = bodyParser.parseUrlencoded({ extended: false});

// Create the Express application object.
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 1337;


// Socket.io
io.on('connection', function(client) {
    console.log('client connected ...');
});

// Configure Express to use the EJS view engine.
app.set('view engine', 'ejs');

// Tell Express where to find views.
app.set('views', path.join(__dirname, 'views'));

// Render HTML when the root path is requested.
app.get('/', function(req, res) {
    res.render('index');
});

// Do some addition when JSON is posted to "/add".
app.post('/add', bodyParser.json(), function(req, res) {
    res.json(req.body.a + req.body.b);
});

// add BU route
app.post('/addBU', function (req, res) {
    var newBU = request.body;
    BU[newBU.name] = newBU.name;
    response.status(201).json(newBU.name);
});

// Add BU route
app.get('/addBU', function(request, response) {
    //var BU = [];
    //response.json(Object.keys(BU));
    var blocks = ['fixed', 'Movable'];
    response.send(blocks);
});

// Serve static files from the "public" folder.
app.use(express.static(path.join(__dirname, 'public')));

// Start the server on a custom port.
server.listen(port);