const { Router } = require('express');
const shims = require('../controllers/shims');

const router = Router();

router.get('/', shims.getShims);
router.get('/:id', shims.getShim);

module.exports = Router;
