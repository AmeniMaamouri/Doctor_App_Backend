const {Router} = require('express');
const router = Router();
const EventController = require('../controllers/EventController')



router.post('/calender', EventController.calender_post)
router.get('/calender', EventController.calender_get)
router.put('/calender', EventController.calender_put)




module.exports = router;