var _ = require('lodash');

/**********************************************/
/*                 WASTE TYPE                 */
/**********************************************/

var WasteType = require('../models/wasteTypeModel');

var wasteTypes = [
  {"id": 1,  "name": "MSW"},
  {"id": 2,  "name": "CW"},
  {"id": 3,  "name": "ICW"},
  {"id": 4,  "name": "Sludge"},
  {"id": 5,  "name": "Compost"},
  {"id": 6,  "name": "Animal waste"},
  {"id": 7,  "name": "GW"},
  {"id": 8,  "name": "PW"}
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

