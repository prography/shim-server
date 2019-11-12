const { Router } = require('express');
const MusicController = require('../controllers/MusicController');

const router = Router();

router.get('/', MusicController.getInformations);
router.get('/:id', MusicController.getInformation);

module.exports = Router;
