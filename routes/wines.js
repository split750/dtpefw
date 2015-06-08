// mongoose 3.8.x
var mongoose = require('mongoose');
// mongodb-uri 0.9.x
var uriUtil = require('mongodb-uri');
 
/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
 
/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */
var mongodbUri = 'mongodb://MongoLabDTPEfW:V9kjSsLbyGMFd9kwpaJPTUYqzWKUs.qqb43nMRuqj6U-@ds036178.mongolab.com:36178/MongoLabDTPEfW';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

/******* Load Model *********/ 
var wine = require('../dataModels/wineModel.js');


/******* Connect to Mongolab **********/
mongoose.connect(mongooseUri, options);
var db = mongoose.connection;             
 
db.on('error', console.error.bind(console, 'connection error:'));  
 
var dbOpened = db.once('open', function() {
    // Wait for the database connection to establish, then start the app.  
    console.log('connection to mongolab OK');   
});



exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    
    wine.findOne({'_id': id}, function foundTasks(err, items) {
        res.send(items);
    });
};

exports.findAll = function(req, res) {
    console.log('search wines');
    
    wine.find(function foundTasks(err, items) {
        res.send(items);
    });
};

exports.addWine = function(req, res) {
    var wineItem = req.body;
    console.log('Adding wine: ' + JSON.stringify(wineItem));
        
    var newWine = new wine({
        name: wineItem.name,
        year: wineItem.year,
        grapes: wineItem.grapes,
        country: wineItem.country,
        region: wineItem.region,
        description: wineItem.description,
        picture: wineItem.picture
    });

    newWine.save(function savedTask(err) {
      if(err) {
        throw err;
        res.send({'error':'An error has occurred'});
      } else {
        console.log('saved wine !');
        res.send('Wine saved !');
      }
    });
}

exports.updateWine = function(req, res) {
    var id = req.params.id;
    var wineItem = req.body;
    delete wineItem._id;
    console.log('Updating wine: ' + id);
    console.log(JSON.stringify(wineItem));
    wine.update({'_id': id}, wineItem, function(err) {
        if (err) {
            console.log('Error updating wine: ' + err);
            res.send({'error':'An error has occurred'});
        } else {
            console.log(wineItem.name + ' wine document(s) updated');
            res.send(wineItem);
        }
    });
}

exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting wine: ' + id);
    
    wine.remove({'_id': id}, function(err) {
        if (err) {
            res.send({'error':'An error has occurred - ' + err});
        } else {
            console.log('wine '+ id + ' document(s) deleted');
            res.send(req.body);
        }
    });
}

