const { Router } = require('express');
const plans = require('../controllers/plans');
const { handleAsync } = require('../utils/routes');

const router = Router();

router.get('/', handleAsync(plans.getPlans));
router.get('/:id', handleAsync(plans.getPlan));

module.exports = Router;
