const { Router } = require('express');
const feedbacks = require('../controllers/feedbacks');
const { verifyAuth } = require('../middlewares/auth');
const { handleAsync } = require('../utils/routes');

const router = Router();

router.post('/', verifyAuth, handleAsync(feedbacks.saveFeedback));

module.exports = router;
