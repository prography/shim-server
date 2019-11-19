const { Router } = require('express');
const feedbacks = require('../controllers/feedbacks');
const { verifyToken } = require('../middlewares/auth');
const { handleAsync } = require('../utils/routes');

const router = Router();

router.post('/', verifyToken, handleAsync(feedbacks.saveFeedback));

module.exports = Router;
