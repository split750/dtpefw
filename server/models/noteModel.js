/**********************************************/
/*               MONGOSSE MODEL               */
/**********************************************/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var Plant = new Schema({
    userId : Number,
    categoryId: Number,
    title: String,
    description : String,
    content : String,
    contracts : [{
        startUpYear : Number,
        contractType : String,
        contractEndDate : Number,
        wasteType : String
    }],
    caracteristics : [{
        nbLine : Number,
        nbTurbine : Number
    }]

});


var Contract = new Schema({
    startUpYear : Number,
    contractType : String,
    contractEndDate : Number,
    wasteType : String
});


module.exports = mongoose.model('Plants', Plant);