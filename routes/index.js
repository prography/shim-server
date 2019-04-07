// const express = require('express')
// const router = express.Router()
//
// // router.use('/main', require('./main.js'))
// router.use('/sleep', require('./sleep.js'))
// // router.use('/video', require('./video.js'))
// // router.use('/music', require('./music.js'))
// // router.use('/etc', require('./etc.js'))
//
// module.exports = router

// index.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()

  // router.use('/main', require('./main.js'))
  router.use('/sleep', require('./sleep')(app))
  // router.use('/video', require('./video.js'))
  // router.use('/music', require('./music.js'))
  // router.use('/etc', require('./etc.js'))

  return router
}
