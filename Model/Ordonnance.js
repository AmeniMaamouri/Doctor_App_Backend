const mongoose = require('mongoose');
Schema = mongoose.Schema

var ordonnaceSchema = new mongoose.Schema({


    
    ordonnance: String,
    patient: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    
})

const Ordonnace = mongoose.model('Ordonnace', ordonnaceSchema);

module.exports = Ordonnace;