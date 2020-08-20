const Patient = require('../Model/Patient')
const fichePatient = require('../Model/FichePatient')
var ObjectID = require('mongodb').ObjectID;
module.exports.fichePatient_post = (req, res) => {
   
    Patient.find({_id: req.body._id}, (err,patient) => {
      
        if(patient[0].fichePatient != null){
            res.json({
                message: 'Fiche client existe déja'
            })
        }else{
            fichePatient({notes: {observation: req.body.observation, dateObservation: req.body.dateObservation} }).save((err,data)=> {
                Patient.updateOne({_id: ObjectID(req.body._id)}, { $set: {fichePatient: data._id} } ).then((obj) => {
                    console.log('Patient Updated');
                    res.json({
                        message: 'Fiche client a été ajouté avec succès'
                    })
                }).catch(err => {
                    console.log(err)
                })
            })
        }
    })
}


module.exports.fichePatients_get = (req,res) => {
    Patient.find({}, (err,patients)=> {
       
        res.json(patients)
    }).sort( { createdAt : -1 } )
}