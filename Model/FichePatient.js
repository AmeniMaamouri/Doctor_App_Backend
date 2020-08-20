const mongoose = require('mongoose');
Schema = mongoose.Schema

var fichePatientSchema = new mongoose.Schema({

    notes: Array,
    createdAt: {
        type: Date,
        default: Date.now
    },
    

})

const FichePatient = mongoose.model('Fiches Patient', fichePatientSchema);

module.exports = FichePatient;