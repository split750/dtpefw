var _ = require('lodash');

  /**********************************************/
  /*               CONTRACT TYPE                */
  /**********************************************/

var contractTypes = [
  {"id": 1,  "name": "O&M"},
  {"id": 2,  "name": "BOT"},
  {"id": 3,  "name": "BOO"},
  {"id": 4,  "name": "Owner"}
];


module.exports = {
  get: function(id) {
    return _.find(contractTypes, function(contracttype){
      return contractType.id === id;
    });
  },
  all: function() {
    return contractTypes;
  }
};