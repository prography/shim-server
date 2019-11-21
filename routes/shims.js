const { Router } = require('express');
const shims = require('../controllers/shims');
const { handleAsync } = require('../utils/routes');

const router = Router();

router.get('/', handleAsync(shims.getShims));
router.get('/:id', handleAsync(shims.getShim));

module.exports = router;
