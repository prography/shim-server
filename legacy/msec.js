module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const updateMusicTime = async () => {
    const connection = await pool.getConnection()
    try {
      const [result] = await connection.query('SELECT music_time FROM SHIM.MUSIC_TB;')
      for (i in result) {
        const h_m_s = result[i].music_time.split(':') // h, m, s 값이 array로 저장됨
        const h = parseInt(h_m_s[0])
        const m = parseInt(h_m_s[1])
        const s = parseInt(h_m_s[2])
        const msec = (h * 3600 + m * 60 + s) * 1000
        const params = [msec, parseInt(i) + 1]
        await connection.query('UPDATE SHIM.MUSIC_TB SET music_msec=? WHERE music_id=?;', params)
      }
      connection.release()
      return result
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  const updateSleepTime = async () => {
    const connection = await pool.getConnection()
    try {
      const [result] = await connection.query('SELECT sleep_time FROM SHIM.SLEEP_TB;')
      for (i in result) {
        const h_m_s = result[i].sleep_time.split(':') // h, m, s 값이 array로 저장됨
        const h = parseInt(h_m_s[0])
        const m = parseInt(h_m_s[1])
        const s = parseInt(h_m_s[2])
        const msec = (h * 3600 + m * 60 + s) * 1000
        const params = [msec, parseInt(i) + 1]
        await connection.query('UPDATE SHIM.SLEEP_TB SET sleep_msec=? WHERE sleep_id=?;', params)
      }
      connection.release()
      return result
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  router.get('/music', async (req, res) => {
    try {
      const result = await updateMusicTime()
      res.status(200).json({ status: 200, arr: result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ status: 500, msg: 'error!' })
    }
  })

  router.get('/sleep', async (req, res) => {
    try {
      const result = await updateSleepTime()
      res.status(200).json({ status: 200, arr: result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ status: 500, msg: 'error!' })
    }
  })

  return router
}
