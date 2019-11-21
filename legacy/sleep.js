// sleep.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const selectMusicUrl = async () => {
    const connection = await pool.getConnection()
    try {
      const [result] = await connection.query('SELECT sleep_id, sleep_music, sleep_name, sleep_picture, sleep_msec FROM SHIM.SLEEP_TB ORDER BY sleep_order ASC;')
      connection.release()
      return result
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  router.get('/', async (req, res) => {
    try {
      const result = await selectMusicUrl()
      res.status(200).json({ status: 200, arr: result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ status: 500, msg: 'error!' })
    }
  })

  return router
}
