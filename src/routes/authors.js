const { Router } = require('express');
const AuthorController = require('../controllers/AuthorController');

const router = Router();

router.get('/', AuthorController.getInformations);
router.get('/:id', AuthorController.getInformation);

module.exports = Router;
