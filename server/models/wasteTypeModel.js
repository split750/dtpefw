var _ = require('lodash');

/**********************************************/
/*                 WASTE TYPE                 */
/**********************************************/

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


module.exports = {
  get: function(id) {
    return _.find(wasteTypes, function(wastetype){
      return wasteType.id === id;
    });
  },
  all: function() {
    return wasteTypes;
  }

};




