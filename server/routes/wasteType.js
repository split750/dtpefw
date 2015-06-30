var _ = require('lodash');

/**********************************************/
/*                 WASTE TYPE                 */
/**********************************************/

var WasteType = require('../models/wasteTypeModel');

var wasteTypes = [
  {"id": 1,  "name": "MSW1"},
  {"id": 2,  "name": "MSW2"},
  {"id": 3,  "name": "MSW3"},
  {"id": 4,  "name": "MSW4"}
];


module.exports = function(app){
  app.get('/wasteTypes', function(req, res){
    res.json(WasteType.all());
  });

  app.get('/wasteTypes/:id', function(req, res){
    var wasteTypeId = parseInt(req.params.id, 10);

    // var selectedUser = _.find(users, function(user){
    //   return user.id === userId;
    // });

    res.json(WasteType.get(wasteTypeId) || {});
  });


};

