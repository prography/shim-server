const { Router } = require('express');
const ShimController = require('../controllers/ShimController');

const router = Router();

router.get('/', ShimController.getInformations);
router.get('/:id', ShimController.getInformation);

module.exports = Router;
