const {Router} = require('express');
const router = Router();
const ProfilController = require('../controllers/ProfilController')

router.get('/profil/:id', ProfilController.profil_id_get)
router.post('/profil/:id', ProfilController.profil_id_post)

module.exports = router;