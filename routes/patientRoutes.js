const {Router} = require('express');
const PatientController = require('../controllers/PatientController')
const router = Router();

router.post('/patients', PatientController.patients_post)
router.get('/patients', PatientController.patients_get)
router.put('/patients', PatientController.patients_put)

module.exports = router;