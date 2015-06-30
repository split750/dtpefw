var mongoose = require('mongoose');

module.exports = mongoose.model('Categories', {
    name : {type : String}
});