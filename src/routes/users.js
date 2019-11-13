const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.post('/', UserController.createAccount);

router.post('/auth', UserController.login);

module.exports = Router;
