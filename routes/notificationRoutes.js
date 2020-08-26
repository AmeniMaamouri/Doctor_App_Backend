const {Router} = require('express');
const router = Router();
const NotificationController = require('../controllers/NotifictionController')

router.post('/:notification', NotificationController.notification_post)
router.get('/:notif', NotificationController.notification_get)
router.put('/:notif', NotificationController.notification_put)

module.exports = router;