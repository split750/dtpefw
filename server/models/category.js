var _ = require('lodash');

var categories = [
  {"id":1, "name": "Asia"},
  {"id":2, "name": "France - CE"},
  {"id":3, "name": "France - IDF"},
  {"id":4, "name": "France - NE"},
  {"id":5, "name": "France - MED"},
  {"id":6, "name": "France - SO"},
  {"id":7, "name": "France - GO"},
  {"id":8, "name": "News"},
  {"id":9, "name": "Poland"},
  {"id":10, "name": "UK"}
];


module.exports = {
  get: function(id) {
    return _.find(categories, function(category){
      return category.id === id;
    });
  },
  all: function() {
    return categories;
  }
}

