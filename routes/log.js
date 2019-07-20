// log.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const insertLog = async (user, event, param) => {
    const connection = await pool.getConnection()
    try {
      if (event === 'PAGE_CHANGE') { // fragment change log insert
        await connection.query('INSERT INTO SHIM.F_ENTER_LOG_TB (f_enter_log_user_id, f_enter_log_type) VALUES (?, ?);', [user, param])
      } else if (event === 'HOME_MUSIC_PLAY' || event === 'HOME_MUSIC_STOP') { // home music log insert
        await connection.query('INSERT INTO SHIM.MAIN_LOG_TB (main_log_user_id, main_log_music_id, main_log_action) VALUES (?, ?, ?);', [user, param, event])
      } else if (event === 'MUSIC_PLAY') { // music play log insert
        params = param.split(',')
        if (params.length === 1) { // params = {music_id}
          await connection.query('INSERT INTO SHIM.MUSIC_LOG_TB (music_log_user_id, music_log_music_id, music_log_action) VALUES (?, ?, ?);', [user, param, event])
        } else { // params = {music_id}, {position}
          // console.log(params[1])
          // console.log(params[1].trim())
          parameters = [user, params[0], event, params[1].trim()]
          await connection.query('INSERT INTO SHIM.MUSIC_LOG_TB (music_log_user_id, music_log_music_id, music_log_action, music_log_restart_position) VALUES (?, ?, ?, ?);', parameters)
        }
      } else if (event === 'MUSIC_PAUSE' || event === 'MUSIC_STOP') { // music pause / stop log insert
        await connection.query('INSERT INTO SHIM.MUSIC_LOG_TB (music_log_user_id, music_log_music_id, music_log_action) VALUES (?, ?, ?);', [user, param, event])
      } else if (event === 'ASMR_PLAY') { // asmr play log insert
        params = param.split(',')
        if (params.length === 1) { // params = {asmr_id}
          await connection.query(`INSERT INTO SHIM.SLEEP_LOG_TB (sleep_log_user_id, sleep_log_sleep_id, sleep_log_action) VALUES (?, ?, ?);`, [user, param, event])
        } else { // params = {asmr_id}, {position}
          parameters = [user, params[0], event, params[1].trim()]
          await connection.query(`INSERT INTO SHIM.SLEEP_LOG_TB (sleep_log_user_id, sleep_log_sleep_id, sleep_log_action, sleep_log_restart_position) VALUES (?, ?, ?, ?);`, parameters)
        }
      } else if (event === 'ASMR_PAUSE' || event === 'ASMR_STOP') { // music pause / stop log insert
        await connection.query(`INSERT INTO SHIM.SLEEP_LOG_TB (sleep_log_user_id, sleep_log_sleep_id, sleep_log_action) VALUES (?, ?, ?);`, [user, param, event])
      } else if (event === 'PLAYLIST_ADD_MUSIC' || event === 'PLAYLIST_REMOVE_MUSIC') { // playlist log insert
        parameters = [user, 0, param, event] // category 0이 music
        await connection.query('INSERT INTO SHIM.PLAYLIST_LOG_TB (playlist_log_user_id, playlist_log_category, playlist_log_music_id, playlist_log_action) VALUES (?, ?, ?, ?);', parameters)
      } else if (event === 'PLAYLIST_ADD_ASMR' || event === 'PLAYLIST_REMOVE_ASMR') { // playlist log insert
        parameters = [user, 1, param, event] // category 1이 asmr
        await connection.query('INSERT INTO SHIM.PLAYLIST_LOG_TB (playlist_log_user_id, playlist_log_category, playlist_log_music_id, playlist_log_action) VALUES (?, ?, ?, ?);', parameters)
      }
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  const insertUser = async (user) => {
    const connection = await pool.getConnection();
    try {
      await connection.query('INSERT INTO SHIM.USER_TB (user_u_id) VALUES (?);', [user])
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error()
    }
  }

  router.post('/', async (req, res) => {
    try {
      const user = req.body.user
      const event = req.body.event
      const params = req.body.params
      console.log(user)
      console.log(event)
      console.log(params)
      await insertUser(user)
      await insertLog(user, event, params)
      res.status(200).json({ 'status': 200, 'msg': 'ok' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
