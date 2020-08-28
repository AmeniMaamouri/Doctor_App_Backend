const User = require("../Model/User")
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

module.exports.login_post = (req,res) => {

   

    User.findOne({ userName: req.body.userName }).then(user => {



        if (user) {

            bcrypt.compare(req.body.password, user.password, (err, same) => {

                if (same) {

                    var payload = {

                        userName: user.userName,
                        role: user.role,
                        id: user._id

                    }

                   return res.json({

                        message: 'Successful authentication',
                        status: 200,
                        success: true,
                        userToken: jwt.sign(payload, '3023b0f5ec57', {})

                    })

                } else { // incorrect password

                   return  res.json({
                        message: 'Email or password incorrect',
                        status: 401,
                        success: false
                    })

                }

            })




        } else {  // incorrect email

           return res.json({

                message: 'Email or password incorrect',
                status: 404,
                success: false

            });

        }

    }).catch( err => {

        return res.json({

                message: 'Error occured',
                status: 500,
                success: false

            });

})
}