var app = require("./server/routes");

var server = require('http').createServer(app);
var port = process.env.PORT || 1337;

// Start the server
server.listen(port, function() {
 console.log('Listening on port : ' + port);
});
