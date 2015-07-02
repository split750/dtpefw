/**********************************************/
/*               MONGOSSE MODEL               */
/**********************************************/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Line = new Schema({

    lineId : Number,

    wastes : [{
        wasteType1 : String,
        wasteType2 : String,
        wasteType3 : String,
        wasteType4 : String,
        lhvNominal : Number
    }],

    furnaces : [{
        incinerationCapacity : Number,
        furnaceCapacity : Number,
        furnaceType : String,
        furnaceConstructor : String,
    }],

    boilers : [{
        boilerPressure : Number,
        boilerTemperature : Number,
        boilerEfficiency : Number,
        steamProduction : Number,
        boilerConstructor : String,
    }],

    flueGazCleaning : [{
        dustFilterBeforeFCG : String,
        fCGType : String,
        dustFilter : String,
        consumable : String,
        noxTreatment : String,
        noxConsumable : String,
        dioxinTreatment : String,
        dioxinConsumable : String,
        fCGConstructor : String,
        filterConstructor : String,
    }]

});

module.exports = mongoose.model('Lines', Line);