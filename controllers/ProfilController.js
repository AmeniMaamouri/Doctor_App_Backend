const User = require('../Model/User')
var ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt')

module.exports.profil_id_get = (req,res) => {
  
    User.find({_id: ObjectID(req.params.id)}, (err,data) => {

   if(JSON.stringify(data) !== '[]'){
      
    res.json({
        _id: data[0]._id,
        userName: data[0].userName,
        name: data[0].name,
        phone: data[0].phone
    })
   }else {
       res.json({
           status:500
       })
   }

    })
}

module.exports.profil_id_post = (req,res) => {
    if(req.body.password){
        req.body.password = bcrypt.hashSync(req.body.password , 12);
    }

    User.updateOne({_id: ObjectID(req.body._id)}, { $set:  req.body } ).then((obj) => {
        console.log('Updated ');
        res.json({
            message: 'Les données ont été mises à jour'
        })
    }).catch(err => {
        console.log(err)
    })
}