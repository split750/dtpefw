var _ = require('lodash');

/**********************************************/
/*                CONTRACT TYPE               */
/**********************************************/

var ContractType = require('../models/contractTypeModel');

var contractTypes = [
  {"id": 1,  "name": "O&M"},
  {"id": 2,  "name": "BOT"},
  {"id": 3,  "name": "BOO"},
  {"id": 4,  "name": "Owner"}
];


module.exports = function(app){

  app.get('/contractTypes', function(req, res){
    res.json(ContractType.all());
  });

  app.get('/contractTypes/:id', function(req, res){
    var contractTypeId = parseInt(req.params.id, 10);

    res.json(ContractType.get(contractTypeId) || {});
  });

};