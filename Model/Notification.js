const mongoose = require('mongoose');


var notificationSchema = new mongoose.Schema({

   
    title : {
        default: 'Vous envoyée une fiche client',
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    fichePatient: String,
    patientName: String

})


const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;