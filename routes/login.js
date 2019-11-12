// register
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')
  const {OAuth2Client} = require('google-auth-library')
  const jwt = require('jsonwebtoken')

  const CLIENT_ID = process.env.CLIENT_ID
  const tokenKey = process.env.TOKEN_KEY
  const client = new OAuth2Client(CLIENT_ID)

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

  /*router.get('/:userid', async (req, res) => {
    try {
      const userid = req.params.userid
      const payload = {'uid':userid}
      console.log(payload)
      res.status(200).json({ 'status': 200, 'msg': 'ok!' }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })*/


  router.post('/', async (req, res) => {
    try {
      const googleToken = req.body.googleToken
      userid = await verify(googleToken) // verify가 통과 안 되면 어떻게 되는 거지?
      await registerId(userid)

      const payLoad = { 'uid' : userid }
      const userToken = jwt.sign(payLoad,tokenKey,{
        algorithm : 'HS256',
        expiresInMinutes : '365d' //expires in 365 days
      })

      res.status(200).json({ 'status': 200, 'arr': userToken })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
