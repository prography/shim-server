// sleep.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const selectMusicUrl = async () => {
    try {
      const connection = await pool.getConnection()
      const [result] = await connection.query('SELECT sleep_music, sleep_name FROM SHIM.SLEEP_TB;')
      return result
    } catch (err) {
      throw new Error(err)
    }
  }

  router.get('/', async (req, res) => {
    console.log(1)
    try {
      console.log("sleep.js")
      const result = await selectMusicUrl()
      res.status(200).json({ 'status': 200, 'arr': result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
