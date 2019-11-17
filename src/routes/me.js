const { Router } = require('express');
const users = require('../controllers/users');
const { verifyToken } = require('../middlewares/auth');
const handleAsync = require('../utils/routes');

const router = Router();

router.get('/', verifyToken, handleAsync(users.getUser));
router.patch('/', verifyToken, handleAsync(users.updateUser));
router.delete('/', verifyToken, handleAsync(users.disableUser));

router.post('/subscription', verifyToken, handleAsync(users.subscribe));
router.get('/subscription', verifyToken, handleAsync(users.getSubscription));
router.delete('/subscription', verifyToken, handleAsync(users.unsubscribe));

module.exports = Router;
