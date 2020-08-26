const Notification = require('../Model/Notification')
const Counter = require('../Model/Counter')
const index = require('../index');
var ObjectID = require('mongodb').ObjectID;

module.exports.notification_post = (req,res) => {
   
       Notification(req.body).save((err,data) => {
       
        Counter.updateOne({_id: ObjectID('5f465380fca6c59e1f21fc07')}, { $inc: {notif : 1} } ).then((obj) => {
            var counter = {
                obj 
            }
            console.log('Updated ');
                if(err) throw err
                
                Notification.find({}, (err,notif)=> {
                    var notifs = {
                        notif
                    }
                    var infor = Object.assign({}, notifs, counter)
                    index.newNotif(infor)
                    
                }).sort({date: -1})
        }).catch(err => {
            console.log(err)
        })
       
       })
   
}

module.exports.notification_get = (req,res)=> {
    Notification.find({}, (err,data) => {
        var data = {
            data
        }
        Counter.find({_id: ObjectID('5f465380fca6c59e1f21fc07')}, (err,count) => {
            var counter = {
                count 
            }
            var infor = Object.assign({}, data, counter)
            res.json(infor)
            if(err) throw err
        })
    }).sort({date: -1})
}

module.exports.notification_put = (req,res) => {
    Counter.updateOne({_id: ObjectID('5f465380fca6c59e1f21fc07')}, { $set: {notif : req.body.notif} } ).then((obj) => {
        console.log('Updated ');
    }).catch(err => {
        console.log(err)
    })
}