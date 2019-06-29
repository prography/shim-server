// etc.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const insertFeedback = async (feedback_userid, feedback_contact, feedback_title, feedback_contents) => {
    try {
      const connection = await pool.getConnection()
      const params = [feedback_userid, feedback_contact, feedback_title, feedback_contents]
      await connection.query('INSERT INTO SHIM.FEEDBACK_TB (feedback_userid, feedback_contact, feedback_title, feedback_contents) VALUES (?, ?, ?, ?);', params)
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  router.post('/feedback', async (req, res) => {
    try {
      const feedback_userid = req.body.feedback_userid
      const feedback_contact = req.body.feedback_contact
      const feedback_title = req.body.feedback_title
      const feedback_contents = req.body.feedback_contents

      await insertFeedback(feedback_userid, feedback_contact, feedback_title, feedback_contents)

      res.status(200).json({ 'status': 200, 'msg': 'ok' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
