// video.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const selectByCategory = async (category) => {
    try {
      const connection = await pool.getConnection()
      let result
      if (category === 'all') {
        [result] = await connection.query('SELECT video_id, video_url, video_title, video_creator FROM SHIM.VIDEO_TB ORDER BY video_order ASC;')
      } else {
        [result] = await connection.query('SELECT video_id, video_url, video_title, video_creator FROM SHIM.VIDEO_TB WHERE video_category like ? ORDER BY video_order ASC;', category)
      }
      connection.release()
      return result
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  router.get('/:category', async (req, res) => {
    const category = req.params.category // all, sleep, instrument, nature
    try {
      const result = await selectByCategory(category)
      res.status(200).json({ 'status': 200, 'arr': result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
