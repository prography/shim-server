const { Router } = require('express');
const authors = require('./authors');
const feedback = require('./feedback');
const logs = require('./logs');
const me = require('./me');
const musics = require('./musics');
const plans = require('./plans');
const shims = require('./shims');
const users = require('./users');

const router = Router();

const pong = (req, res) => res.send('pong');

router.get('/ping', pong);

router.use('/authors', authors);
router.use('/feedback', feedback);
router.use('/logs', logs);
router.use('/me', me);
router.use('/musics', musics);
router.use('/plans', plans);
router.use('/shims', shims);
router.use('/users', users);

module.exports = router;
