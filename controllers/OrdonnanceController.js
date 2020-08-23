const Ordonnance = require('../Model/Ordonnance')
const Patient = require('../Model/Patient')

module.exports.ordonnances_post = (req, res) => {

    const information = {
        patient: req.body._id,
        ordonnance: req.body.Ordonnance
    }
    Ordonnance(information).save((err, data) => {
        if (data) {
            res.json({
                message: 'Ordonnance a été ajouté avec succès'
            })
        }
        if (err) throw err
    })

}

module.exports.ordonnances_get = (req, res) => {

    Patient.find({}, (err, data) => {
        let patient = {
            patients: data
        }
        Ordonnance.find({}, (err, ord) => {
            let ordonnances = {
                ordonnance: ord
            }

            var obj = Object.assign({}, patient, ordonnances)

            res.json(obj)
        }).sort({ createdAt: -1 })


        if (err) throw err
    }).sort({ createdAt: -1 })



}

module.exports.ordonnance_id_get = (req, res) => {

    Ordonnance.findOne({_id: req.params.id}, (err,data) => {
        Patient.findOne({_id: data.patient}, (err,patient) => {
            res.json({
                patientName: patient.name,
                ordonnance: data.ordonnance,
                createdAt: data.createdAt
            })
        })
    })

}


