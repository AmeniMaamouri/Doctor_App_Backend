const mongoose = require('mongoose');


var eventSchema = new mongoose.Schema({

   
    title : String,
    start: String


})


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;