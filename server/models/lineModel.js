/**********************************************/
/*               MONGOSSE MODEL               */
/**********************************************/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Line = new Schema({

    wastes : [{
        wasteType : String,
        lhvNominal : Number
    }],

    furnaces : [{
        incinerationCapacity : Number,
        furnaceCapacity : Number,
        furnaceType : String,
    }],

    boilers : [{
        boilerPressure : Number,
        boilerTemperature : Number,
        boilerEfficiency : Number,
        steamProduction : Number,
    }],


});

module.exports = mongoose.model('Lines', Line);