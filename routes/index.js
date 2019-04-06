var express = require('express');
var router = express.Router();

router.use('/main', require('./main.js'))
router.use('/sleep', require('./sleep.js'))
router.use('/video', require('./video.js'))
router.use('/music', require('./music.js'))
router.use('/etc', require('./etc.js'))

module.exports = router;
