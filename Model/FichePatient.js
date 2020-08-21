const mongoose = require('mongoose');
Schema = mongoose.Schema
var AutoIncrement = require('mongoose-sequence')(mongoose);

var fichePatientSchema = new mongoose.Schema({

    sheetNumber: {
        type: Number
      },
    notes: [
        {
            observation: String,
            dateObservation: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },


})

fichePatientSchema.plugin(AutoIncrement, {id:'sheetNumber_seq',inc_field: 'sheetNumber'});
const FichePatient = mongoose.model('Fiches Patient', fichePatientSchema);

module.exports = FichePatient;