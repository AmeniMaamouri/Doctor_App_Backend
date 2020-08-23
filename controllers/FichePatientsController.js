const Patient = require('../Model/Patient')
const fichePatient = require('../Model/FichePatient');
const FichePatient = require('../Model/FichePatient');
var ObjectID = require('mongodb').ObjectID;

module.exports.fichePatient_post = (req, res) => {

    Patient.find({ _id: ObjectID(req.body._id) }, (err, patient) => {

        if (patient[0].fichePatient != null) {
            res.json({
                message: 'Fiche client existe déja'
            })
        } else {
            fichePatient({ notes: { observation: req.body.observation, dateObservation: req.body.dateObservation } }).save((err, data) => {
                Patient.updateOne({ _id: ObjectID(req.body._id) }, { $set: { fichePatient: data._id } }).then((obj) => {
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


module.exports.fichePatients_get = (req, res) => {
    Patient.find({}, (err, patients) => {
        let patient = {
            patients: patients
        }
        FichePatient.find({}, (err,data)=> {
            let fichePatients = {
                fichePatient: data
            }
            var obj = Object.assign({}, patient, fichePatients)
            res.json(obj)
        }).sort({ createdAt: -1 })

        
    }).sort({ createdAt: -1 })
}

module.exports.fichePatient_id_get = (req, res) => {
    Patient.find({ _id: ObjectID(req.params.id) }, (err, data) => {

        FichePatient.find({ _id: ObjectID(data[0].fichePatient) }, (err, fiche) => {

            const informations = {
                _id: data[0]._id,
                name: data[0].name,
                phone: data[0].phone,
                birth: data[0].birth,
                sexe: data[0].sexe,
                adress: data[0].adress,
                createdAt: data[0].createdAt,
                fichePatient: data[0].fichePatient,
                fiche: fiche[0]
            }
            res.json(informations)

        })
    }).sort({ createdAt: -1 })
}


module.exports.fichePatient_id_post = (req, res) => {

 FichePatient.updateOne(
    { _id: ObjectID(req.body._id) }, 
    { $push: { notes: {
        $each : [req.body],
        $position: 0
    } } },
   
).then((obj) => {
    console.log('Updated ');
}).catch(err => {
    console.log(err)
})
}



module.exports.fichePatient_id_put = (req,res)=> {
    FichePatient.updateOne({_id: ObjectID(req.body._id)}, { $set: {notes : req.body.notes} } ).then((obj) => {
        console.log('Updated ');
    }).catch(err => {
        console.log(err)
    })
}