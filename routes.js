
var Todo = require('./data/todoSchema'); // import the model


module.exports = function (app) {

    // ALL of our API methods will return json data.
    app.all('/api/*', function (req, res, next) {
        res.contentType('json');
        next();
    });


    // 404 error handling for when no matching route is found
    app.use(function (req, res) {
        res.status(404);
        res.json({ error: 'no matching route found' });
    });

    // *****
    // validation functions:
    // *****
    var validateGuid = function (req) {
        // validation: check id is a GUID (mongoDb unique identifiers use this format)
        req.assert('id', 'Id is a GUID and must have a length of 24 chars').isLength(24, 24);
        req.assert('id', 'Id is a GUID and must be alpha-numeric').isAlphanumeric();
    }

    var validateTodoContent = function (req) {
        // check task is valid
        req.assert('task', 'Invalid - task is empty').notEmpty();
        req.assert('task', 'Invalid - task requires at least 5 chars').isLength(5);
    }


    // get all todos (from mongoDb via mongoose)
    app.get('/api/todos', function (req, res) {
     
        // USAGE: 
        // curl -X GET http://localhost:8080/api/todos
     
        var conditions = {}; // we can use this object to supply search params ....
     
        Todo
          .find(conditions)
          .exec(function (err, todos) {
     
            // if there is an error retrieving, send the error. nothing after res.json(err) will execute
            if (err) {
              console.log(err);
              res.status(404);
              res.json(err);
            }
            res.status(200);
            res.send(JSON.stringify(todos, null, '\t')); // prettify JSON response
          });
    });

     
     
    // get by id (guid)
    app.get('/api/todos/:id', function (req, res) {
     
        // USAGE: 
        // curl -X GET http://localhost:8080/api/todos/53faa94525a90bd06e000004
     
        validateGuid(req);
     
        // create a validation object, if input is invalid then return a JSON object containing errors
        var errors = req.validationErrors();
        if (errors) {
            res.status(404);
            res.json(errors);
        }
     
        Todo
            .findById(req.params.id)
            .exec(function (err, todo) {
                if (err) {
                res.status(404);
                res.json(err);
            }
     
            if (todo !== null) {
                res.status(200);
                res.send(JSON.stringify(todo, null, '\t')); // prettify JSON response
            } else {
                // didn't find a match, return error msg
                res.status(404);
                res.json({ "error": "no todo for that id was found" });
            }
        });
    });

    // create a todo
    app.post('/api/todos', function (req, res) {
     
        // USAGE: 
        // curl -X POST -d task="task detail here....." -d comment="comment detail here....." -d done="true" http://localhost:8080/api/todos
     
        // validation...
        validateTodoContent(req);
     
        // create a validation object, if input is invalid then return a JSON object containing errors
        var errors = req.validationErrors();
     
        if (errors) {
            console.log(errors);
            res.json(errors);
            return;
        }
     
        var _todo = new Todo();
        _todo.task = req.body.task;
        _todo.comment = req.body.comment;
        _todo.done = req.body.done;
        _todo.dateSaved = new Date();
     
        Todo.create(_todo, function (err) {
            if (err) {
                console.log(err);
                res.status(400); // bad request
                res.json(err);
            }
     
            var newResource = req.protocol + '://' + req.get('host') + req.originalUrl;
            res.status(201); // created
            res.json({ message: 'Todo created ', url: newResource + _todo._id });
        });
    });

    // update a todo
    app.put('/api/todos/:id', function (req, res) {
     
        // USAGE: 
        // curl -X PUT -d comment="comment updated" -d task="task updated" -d done="true" -d dateSaved="2014-06-30T11:50:44.049Z"  http://localhost:8080/api/todos/53f72ba89f7f4262655677de
     
        validateGuid(req);
        validateTodoContent(req);
     
        // create a validation object, if input is invalid then return a JSON object containing errors
        var errors = req.validationErrors();
     
        if (errors) {
            console.log(errors);
            res.json(errors);
        }
     
        Todo
            .findById(req.params.id)
            .exec(function (err, todo) {
     
            if (todo === null || todo === undefined) {
                res.status(404);
                res.json({ message: 'Todo could not be found for id ' + req.params.id });
            };
     
            if (err) {
                res.status(404);
                res.json(err);
            } else {
     
                todo.task = req.body.task;
                todo.done = req.body.done;
                todo.dateSaved = new Date(); // update with new last-saved-date
                todo.comment = req.body.comment;
     
                todo.save(function (err) {
                    if (err) {
                        res.status(404);
                        res.json(err);
                    } else {
                        var updatedResource = req.protocol + '://' + req.get('host') + req.originalUrl;
                        res.status(200); // successful PUT request
                        res.json({ message: 'Todo successfully updated ', url: updatedResource + todo._id });
                    }
                });
            }
        });
    });
     
    // delete a todo
    app.delete('/api/todos/:id', function (req, res) {
        // USAGE
        // curl -X DELETE http://localhost:8080/api/todos/53f9cbbf06d9334450000004
     
        var id = req.params.id;
        return Todo.findById(id, function (err, todo) {
     
            if (todo === null || todo === undefined) {
                res.status(404);
                res.json({ message: 'Todo could not be found for id ' + req.params.id });
            };
     
            todo.remove(function (error) {
                if (err) {
                    console.log(error);
                    res.json(error);
                } else {
                    console.log('Todo successfully deleted ' + id);
                    res.status(204);
                    res.json({ message: 'Todo successfully deleted ', id: id });
                }
            });
        });
    });

};
