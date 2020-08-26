
const mongoose = require('mongoose');


var counterSchema = new mongoose.Schema({

   
    reference_value: Number,
    seq : Number,
    notif: Number

})


const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;