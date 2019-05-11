module.exports = (app) => {
  const express = require('express')
  const router = express.Router()

  router.use('/main', require('./main')(app))
  router.use('/sleep', require('./sleep')(app))
  router.use('/video', require('./video')(app))
  router.use('/music', require('./music')(app))
  router.use('/log', require('./log')(app))

  return router
}
