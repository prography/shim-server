// main.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const selectAll = async () => {
    try {
      const connection = await pool.getConnection()
      const [result] = await connection.query('SELECT main_id, main_name, main_music, main_picture FROM SHIM.MAIN_TB;')
      return result
    } catch (err) {
      throw new Error(err)
    }
  }

  router.get('/', async (req, res) => {

    try {
      const result = await selectAll()
      res.status(200).json({ 'status': 200, 'arr': result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
