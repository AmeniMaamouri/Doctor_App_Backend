const {Router} = require('express');
const router = Router();
const OrdonnanceController = require('../controllers/OrdonnanceController')


router.get('/ordonnances', OrdonnanceController.ordonnances_get)
router.post('/ordonnances', OrdonnanceController.ordonnances_post)
router.get('/ordonnance/:id', OrdonnanceController.ordonnance_id_get)


module.exports = router;