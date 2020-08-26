
const Event = require('../Model/Event')
var ObjectID = require('mongodb').ObjectID;

module.exports.calender_post = (req,res) => {
    Event(req.body).save((err,data) => {
        if (err) throw err

        res.json({
            message: 'Rendez-Vous a été ajouté avec succès'
        })
    })
}


module.exports.calender_get = (req,res) => {
   Event.find({}, (err,data)=> {
       res.json(data)
       if(err) throw err
   })
}

module.exports.calender_put = (req,res) => {
    Event.deleteOne({_id: ObjectID(req.body._id)}).then((obj) => {
        console.log('Event Removed');
    }).catch(err => {
        console.log(err)
    })

 

}