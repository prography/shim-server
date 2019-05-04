module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const selectMainId = async (name) => {
    try {
      const connection = await pool.getConnection()
      const [result] = await connection.query('SELECT main_id FROM SHIM.MAIN_TB WHERE MAIN_TB.main_name = ?;', [name])
      connection.release()
      return result
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  const selectMainName = async (id) => {
    try {
      const connection = await pool.getConnection()
      const [result] = await connection.query('SELECT main_name FROM SHIM.MAIN_TP WHERE MAIN_TB.main_id = ?;', [id])
      connection.release()
      return result
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  router.get('/:name', async (req, res) => {
    const name = req.params.name
    try {
      const result = await selectMainId(name)
      res.status(200).json({ 'status': 200, 'arr': result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  router.post('/', async (req, res) => {
    const id = req.body.id
    try {
      const result = await selectMainName(id)
      res.status(201).json({ 'status': 201, 'arr': result })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
