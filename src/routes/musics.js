const { Router } = require('express');
const musics = require('../controllers/musics');
const { handleAsync } = require('../utils/routes');

const router = Router();

router.get('/', handleAsync(musics.getMusics));
router.get('/:id', handleAsync(musics.getMusic));

module.exports = Router;
