const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/me', UserController.getInformation);
router.patch('/me', UserController.updateInformation);
router.put('/me', UserController.updateInformation);
router.delete('/me', UserController.deleteAccount);

router.post('/me/subscription', UserController.subscribe);
router.get('/me/subscription', UserController.getSubscription);
router.delete('/me/subscription', UserController.unsubscribe);

module.exports = Router;
