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
    
    contacts : {
        plantDirectorName : String,
        plantDirectorTel : String,
        plantDirectorEmail : String,
        plantManagerName : String,
        plantManagerTel : String,
        plantManagerEmail : String,
        regionManagerName : String,
        regionManagerTel : String,
        regionManagerEmail : String,
    },

    contracts : {
        startUpYear : Number,
        contractType : String,
        contractEndDate : Date,
        contracted : Boolean,
    },
    
    caracteristics : {
        nbLine : Number,
        line1Id : Number,
        line2Id : Number,
        line3Id : Number,
        line4Id : Number,
        valorisationType : String,
        nbTurbine : Number,
        valorisation1Id : Number,
        valorisation2Id : Number,
        valorisation3Id : Number,
    },

    strategyQuestionnaire : {
        seIsOwner : Boolean,
        seIsShareholder : Number,
        seIsPPPorPFI : Number,
        seIsOperator : Number,
        yearlyIncinirationVolumeLimited : Boolean,
        plantEmissionsTargetBelowPermit : Boolean,
        doYouCreateValuePerTonIncinirated : Boolean,
        doYouCreateValuePerMWElecExported : Boolean,
        doYouCreateValuePerMWHeatExported : Boolean,
        valueFromOtherProcesses : Boolean,
        standAlonePlant : Boolean,
        partOfRegionCountryPandL : Boolean,
        nbOfFinanceAdminStaff : Number,
        nbOfOperationStaff : Number,
        nbOfMaintenanceStaff : Number,
        totalNbOfStaff : Number,
        optimisationProgramConsumables : Boolean,
        aPCR : String,
        bottomAsh : String,
        availabilityTarget : Number,
        heatingValueTarget : Number,
        maintenanceStrategyAvailable : Boolean,
        timeDurationBetweenPlannedStop : Number,
        nbOfServiceContracts : Number,
        longTermLifecycleCriticalComponents : Boolean,
        cMMSSystem : Number,
        serviceContractTurbine : Boolean,
        energyOptimizationProject : Boolean,
        plantModificationProject : Boolean
    }

});

module.exports = mongoose.model('Plants', Plant);