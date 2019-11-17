const { Router } = require('express');
const users = require('../controllers/users');
const handleAsync = require('../utils/routes');

const router = Router();

router.post('/auth', handleAsync(users.login));

module.exports = Router;
