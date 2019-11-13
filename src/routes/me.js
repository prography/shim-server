const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/', UserController.getInformation);
router.patch('/', UserController.updateInformation);
router.put('/', UserController.updateInformation);
router.delete('/', UserController.deleteAccount);

router.post('/subscription', UserController.subscribe);
router.get('/subscription', UserController.getSubscription);
router.delete('/subscription', UserController.unsubscribe);

module.exports = Router;
