const {Router} = require('express');
const FichePatientController = require('../controllers/FichePatientsController')
const router = Router();

router.post('/fiches-patients', FichePatientController.fichePatient_post)
router.get('/fiches-patients', FichePatientController.fichePatients_get)

module.exports = router;