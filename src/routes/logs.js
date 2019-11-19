const { Router } = require('express');
const logs = require('../controllers/logs');

const router = Router();

router.post('/music', logs.saveMusicLog);
router.post('/shim', logs.saveShimLog);
router.post('/ui', logs.saveUiLog);

module.exports = Router;
