const mongoose = require('mongoose');
Schema = mongoose.Schema

var patientSchema = new mongoose.Schema({


    name: String,
    phone: String,
    birth: {
        type: Date,
    },
    sexe: String,
    adress: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    fichePatient: String
    // fichePatient: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Fiches Patient',
    //     default: null
    // }]

})

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;