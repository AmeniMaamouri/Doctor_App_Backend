const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({

   
    userName: String,
    password : String,
    role: String,
    name: String,
    phone: String

})


const User = mongoose.model('User', userSchema);

module.exports = User;