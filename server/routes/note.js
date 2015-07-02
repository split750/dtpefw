var _ = require('lodash');

var notesModel = require('../models/plantModel');

var categoryModel = require('../models/category');


module.exports = function(app) {
  
  app.get('/notes', function(req, res) {
    console.log('Search notes');
    notesModel.find(function foundNotes(err, items) {
      res.send(items);
    });
    //res.json(Note.all());
    //getNotes(res);
  });

  app.post('/notes', function(req, res) {
    var noteItem = req.body;
    console.log('Adding note: ' + JSON.stringify(noteItem));
    res.json(notesModel.create(noteItem), function savedNotes(err) {
      if(err) {
        throw err;
        res.send({'error':'An error has occurred'});
      } else {
        console.log('saved plant !');
        res.send({'success':'saved !'});
      }
    });
  });

  app.put('/notes/:id', function(req, res) {
    var id = req.params.id;
    var noteItem = req.body;
    
    delete noteItem._id;
    
    console.log('Updating note: ' + id);
    console.log('line 42 : ' + JSON.stringify(noteItem));

    notesModel.update({'_id': id}, noteItem, function(err) {
        if (err) {
            console.log('Error updating plant: ' + err);
            res.send({'error':'An error has occurred'});
        } else {
            console.log(noteItem.title + ' plant document(s) updated');
            res.send(noteItem);
        }
    });

  });


  app.get('/notes/:id', function(req, res) {
    var noteId = req.params.id;
    console.log('Retrievong note : ' + noteId);
    notesModel.findOne({'_id': noteId }, function foundNotes(err, items) {
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      } else {
        res.send(items);
      };
    });
  });


  app.delete('/notes/:id', function(req, res) {
    //res.json(Note.delete(parseInt(req.param('id'), 10)) || {});
    
    var id = req.params.id;
    console.log('Deleting note: ' + id);
    
    notesModel.remove({'_id': id}, function(err) {
        if (err) {
            res.send({'error':'An error has occurred - ' + err});
        } else {
            console.log('note '+ id + ' document(s) deleted');
            res.send(req.body);
        }
    });

  });
};


