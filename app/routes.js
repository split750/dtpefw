

/*****************************************************/
/******************* TODO ROUTES *********************/
/*****************************************************/

var Todo = require('./models/todo');

function getTodos(res){
	Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		getTodos(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getTodos(res);
		});

	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});

	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	app.get('/todos', function(req, res) {
		res.sendfile('./public/template/todos.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

};




/*********************************************/
/**************** PLANT ROUTES ***************/
/*********************************************/


var Plant = require('./models/plant');


function getPlants(res){
	Plant.find(function(err, plants) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(plants); // return all todos in JSON format
		});
};


module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/plants', function(req, res) {

		// use mongoose to get all todos in the database
		getPlants(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/plants', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Plant.create({
			text : req.body.text,
			done : false
		}, function(err, plant) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getPlants(res);
		});

	});

	// delete a todo
	app.delete('/api/plants/:plant_id', function(req, res) {
		Plant.remove({
			_id : req.params.plant_id
		}, function(err, plant) {
			if (err)
				res.send(err);

			getPlants(res);
		});
	});

	app.get('/plants', function(req, res) {
		res.sendfile('./public/template/plants-template/plantsHomeView.html');
	});

};