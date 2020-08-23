
const Patient = require('../Model/Patient');
const moment = require('moment')
var ObjectID = require('mongodb').ObjectID;

module.exports.patients_post = (req,res) => {
    
    Patient.findOne({name: req.body.name}, (err,data)=> {
        if(data) {

            if (moment(req.body.birth).subtract(10, 'days').calendar() == moment(data.birth).subtract(10, 'days').calendar()){
                res.json({
                    message: 'Patient existe déja'
                })
            }else{
                
                Patient(req.body).save((err,data) => {
                    if (err) console.log(err)
                    res.json({
                        message: 'Le Patient a été ajouté avec succès'
                    })
                })
            }
        }else{
            Patient(req.body).save((err,data) => {
                if (err) console.log(err)
                res.json({
                    message: 'Le Patient a été ajouté avec succès'
                })
            })
        }
    })
}


module.exports.patients_get = (req,res) => {
    let patients = [];
    Patient.find({}, (err,data)=> {
   
       res.json(data)
        if(err) throw err
    }).sort( { createdAt : -1 } )
}

module.exports.patients_put = (req,res)=> {
    Patient.updateOne({_id: ObjectID(req.body._id)}, { $set: req.body } ).then((obj) => {
        console.log('Updated');
    }).catch(err => {
        console.log(err)
    })
}