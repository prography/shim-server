// main.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const selectRandomly = async () => {
    try {
      let numbers = []
      let result = []
      let rand = 3
      const connection = await pool.getConnection()
      const [temp] = await connection.query('SELECT COUNT(*) FROM SHIM.MAIN_TB;')
      const count = temp[0]['COUNT(*)']

      for (let i=0; i<rand; i++) {
        numbers[i] = Math.floor(Math.random() * count) + 1
        for (let j=0; j<i; j++) {
          if (numbers[i] == numbers[j]) {
            i = i-1;
            break;
          }
        }
      }

      for (let i=0; i<rand; i++) {
        const [temp] = await connection.query('SELECT main_id, main_name, main_music, main_author, main_picture FROM SHIM.MAIN_TB WHERE main_id = ?;', numbers[i])
        result.push(temp[0])
      }
      connection.release()
      return result
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  router.get('/', async (req, res) => {

    try {
      const result = await selectRandomly()
      res.status(200).json({ 'status': 200, 'arr': result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
