const { Router } = require('express');
const users = require('../controllers/users');
const { verifyAuth } = require('../middlewares/auth');
const { handleAsync } = require('../utils/routes');

const router = Router();

router.get('/', verifyAuth, handleAsync(users.getUser));
router.patch('/', verifyAuth, handleAsync(users.updateUser));
router.delete('/', verifyAuth, handleAsync(users.disableUser));

router.post('/subscription', verifyAuth, handleAsync(users.subscribe));
router.get('/subscription', verifyAuth, handleAsync(users.getSubscription));
router.delete('/subscription', verifyAuth, handleAsync(users.unsubscribe));

module.exports = router;
