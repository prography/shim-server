// register
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')
  const {OAuth2Client} = require('google-auth-library')

  const verify = async (token) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID  // Specify the CLIENT_ID of the app that accesses the backend
      })
      const payload = ticket.getPayload()
      const userid = payload['sub']

      return userid
    } catch (err) {
      throw new Error(err)
    }
  }

  const registerId = async (userid) => {
    const connection = await pool.getConnection()
    try {
      let result
      [result] = await connection.query('SELECT COUNT(*) FROM SHIM.ACCOUNT_TB WHERE a_google_id = ?;', userid)

      if (result[0]['COUNT(*)'] == 0) {
        await connection.query('INSERT INTO `SHIM`.`ACCOUNT_TB` (`a_google_id`) VALUES (?);', userid)
      }
      connection.release()

    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }


  router.post('/', async (req, res) => {
    try {
      const token = req.body.token
      userid = await verify(token)
      await registerId(userid)

      res.status(200).json({ 'status': 200, 'msg': 'ok!' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
