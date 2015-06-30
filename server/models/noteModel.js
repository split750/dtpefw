/**********************************************/
/*               MONGOSSE MODEL               */
/**********************************************/

var mongoose = require('mongoose');

module.exports = mongoose.model('Notes', {
    userId : {type : Number},
    categoryId: {type : Number},
    title: {type : String},
    description : {type : String},
    content : {type : String}
});