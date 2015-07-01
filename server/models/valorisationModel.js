/**********************************************/
/*               MONGOSSE MODEL               */
/**********************************************/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Valorisation = new Schema({

    valorisationId : Number,

    heat : [{
        thermalOutput : Number,
    }],

    turbine : [{
        turbineContract : String,
        turbineConstructor : String,
        turbineType : String,
        electricityOutput : Number,
        alternatorConstructor : String,
    }],
    
});

module.exports = mongoose.model('Valorisations', Valorisation);