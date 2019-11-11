module.exports = (app) => {
  const express = require('express')
  const router = express.Router()

  router.use('/main', require('./main')(app))
  router.use('/sleep', require('./sleep')(app))
  router.use('/video', require('./video')(app))
  router.use('/music', require('./music')(app))
  router.use('/log', require('./log')(app))
  router.use('/etc', require('./etc')(app))
  router.use('/msec', require('./msec')(app))
  router.use('/login', require('./login')(app))

  return router
}
