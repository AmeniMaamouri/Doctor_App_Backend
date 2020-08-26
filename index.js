const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes')
const fichePatientRoutes = require('./routes/fichePatientRoutes')
const ordonnanceRoutes = require('./routes/ordonnanceRoutes')
const eventRoutes = require('./routes/eventRoutes')
const authRoutes = require('./routes/authRoutes')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.set('useCreateIndex', true)
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@todo-flng1.mongodb.net/doctor?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Connected to Database'))
    .catch((err) => {
        console.log(err);
    });

mongoose.set('useFindAndModify', false);

app.listen(4000, () => {
    console.log('Server running on port 4000');
})

app.use(patientRoutes)
app.use(fichePatientRoutes)
app.use(ordonnanceRoutes)
app.use(eventRoutes)
app.use(authRoutes)
