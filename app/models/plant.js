var mongoose = require('mongoose');

module.exports = mongoose.model('Plant', {
    Name : {type : String, default: ''}
});