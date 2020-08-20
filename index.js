const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes')
const fichePatientRoutes = require('./routes/fichePatientRoutes')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@todo-flng1.mongodb.net/doctor?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Connected to Database'))
    .catch((err) => {
        console.log(err);
    });


app.listen(4000, () => {
    console.log('Server running on port 4000');
})

app.use(patientRoutes)
app.use(fichePatientRoutes)