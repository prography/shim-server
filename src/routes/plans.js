const { Router } = require('express');
const PlanController = require('../controllers/PlanController');

const router = Router();

router.get('/', PlanController.getInformations);
router.get('/:id', PlanController.getInformation);

module.exports = Router;
