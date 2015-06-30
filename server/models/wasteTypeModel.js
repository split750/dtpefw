var _ = require('lodash');

/**********************************************/
/*                 WASTE TYPE                 */
/**********************************************/

var wasteTypes = [
  {"id": 1,  "name": "MSW1"},
  {"id": 2,  "name": "MSW2"},
  {"id": 3,  "name": "MSW3"},
  {"id": 4,  "name": "MSW4"}
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




