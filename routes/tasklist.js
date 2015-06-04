var mongoose = require('mongoose'), 
  task = require('../models/task.js');

module.exports = TaskList;

function TaskList(connection) {
  mongoose.connect(connection);

  // connection events: 
  // we can use the mongoose api to hook into events e.g. when connecting / disconnecting to MongoDB
  mongoose.connection.on('connected', function() {
    console.log('Connected to url: ' + connection);
  });
  mongoose.connection.on('error', function(err) {
    console.log('Connection error: ' + err);
  });

}

TaskList.prototype = {
  showTasks: function(req, res) {
    task.find({ itemCompleted : false }, function foundTasks(err, items) {
    res.render('index', { title: 'My ToDo List', tasks: items })
    });
  },

  addTask: function(req,res) {
    var item = req.body;
    var newTask = new task();
    newTask.itemName = item.itemName;
    newTask.itemCategory = item.itemCategory;
    newTask.save(function savedTask(err) {
      if(err) {
        throw err;
      }
    });
    res.redirect('/');
  },

  completeTask: function(req,res) {
    var completedTasks = req.body;
    for(taskId in completedTasks) {
      if(completedTasks[taskId]=='true') {
        var conditions = { _id: taskId };
        var updates = { itemCompleted: completedTasks[taskId] };
        task.update(conditions, updates, function updatedTask(err) {
          if(err) {
            throw err;
          }
        });
      }
    }
    res.redirect('/');
  }
}