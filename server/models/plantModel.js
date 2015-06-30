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
        contractEndDate : Number
    }],
    
    caracteristics : [{
        nbLine : Number,
        nbTurbine : Number,
        line1Id : String,
        line2Id : String,
        line3Id : String,
        line4Id : String
    }],

});

module.exports = mongoose.model('Plants', Plant);