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
var plantModel = require('../dataModels/plantModel.js');


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
    console.log('Retrieving plant: ' + id);
    
    plantModel.findOne({'_id': id}, function foundTasks(err, items) {
        res.send(items);
    });
};

exports.findAll = function(req, res) {
    console.log('search plants');
    
    plantModel.find(function foundTasks(err, items) {
        res.send(items);
    });
};

exports.addPlant = function(req, res) {
    var plantItem = req.body;
    console.log('Adding plant: ' + JSON.stringify(plantItem));
        
    var newPlant = new plantModel({
        bu: plantItem.bu,
        region: plantItem.region,
        name: plantItem.name,
        year: plantItem.year,
        grapes: plantItem.grapes,
        country: plantItem.country,
        description: plantItem.description,
        picture: plantItem.picture
    });

    newPlant.save(function savedTask(err) {
      if(err) {
        throw err;
        res.send({'error':'An error has occurred'});
      } else {
        console.log('saved plant !');
        res.send({'success':'saved !'});
      }
    });
}

exports.updatePlant = function(req, res) {
    var id = req.params.id;
    var plantItem = req.body;
    delete plantItem._id;
    console.log('Updating plant: ' + id);
    console.log(JSON.stringify(plantItem));
    plantModel.update({'_id': id}, plantItem, function(err) {
        if (err) {
            console.log('Error updating plant: ' + err);
            res.send({'error':'An error has occurred'});
        } else {
            console.log(plantItem.name + ' plant document(s) updated');
            res.send(plantItem);
        }
    });
}

exports.deletePlant = function(req, res) {
    var id = req.params.id;
    console.log('Deleting plant: ' + id);
    
    plantModel.remove({'_id': id}, function(err) {
        if (err) {
            res.send({'error':'An error has occurred - ' + err});
        } else {
            console.log('plant '+ id + ' document(s) deleted');
            res.send(req.body);
        }
    });
}

