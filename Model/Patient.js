const mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({


    name: String,
    phone: String,
    birth: {
        type: Date,
    },
    sexe : String,
    adress: String,
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;