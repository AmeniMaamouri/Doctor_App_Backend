const {Router} = require('express');
const FichePatientController = require('../controllers/FichePatientsController')
const router = Router();

router.post('/fiches-patients', FichePatientController.fichePatient_post)
router.get('/fiches-patients', FichePatientController.fichePatients_get)
router.get('/fiche-patient/:id', FichePatientController.fichePatient_id_get)
router.post('/fiche-patient/:id', FichePatientController.fichePatient_id_post)
router.put('/fiche-patient/:id', FichePatientController.fichePatient_id_put)

module.exports = router;