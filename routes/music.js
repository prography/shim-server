// music.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const selectByCategory = async (category) => {
    try {
      const connection = await pool.getConnection()
      let result
      if (category === 'all') {
        [result] = await connection.query('SELECT music_id, music_name, music_music, music_picture FROM SHIM.MUSIC_TB;')
      } else {
        [result] = await connection.query('SELECT music_id, music_name, music_music, music_picture FROM SHIM.MUSIC_TB WHERE music_category like ?;', category)
      }
      return result
    } catch (err) {
      throw new Error(err)
    }
  }

  router.get('/:category', async (req, res) => {
    const category = req.params.category // 전체, 수면, 악기, 자연
    try {
      const result = await selectByCategory(category)
      res.status(200).json({ 'status': 200, 'arr': result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
