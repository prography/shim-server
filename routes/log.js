// log.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const insertFragmentEnterLog = async (f_enter_log_user_id, f_enter_log_type) => {
    try {
      const connection = await pool.getConnection()
      const params = [f_enter_log_user_id, f_enter_log_type]
      await connection.query('INSERT INTO `SHIM`.`F_ENTER_LOG_TB` (`f_enter_log_user_id`, `f_enter_log_type`) VALUES (?, ?);', params)
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  const insertMainLog = async (main_log_user_id, main_log_pic_id, main_log_action) => {
    try {
      const connection = await pool.getConnection()
      const params = [main_log_user_id, main_log_pic_id, main_log_action]
      await connection.query('INSERT INTO `SHIM`.`MAIN_LOG_TB` (`main_log_user_id`, `main_log_pic_id`, `main_log_action`) VALUES (?, ?, ?);', params)
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  const insertMusicLog = async (music_log_user_id, music_log_music_id, music_log_action) => {
    try {
      const connection = await pool.getConnection()
      const params = [music_log_user_id, music_log_music_id, music_log_action]
      await connection.query('INSERT INTO `SHIM`.`MUSIC_LOG_TB` (`music_log_user_id`, `music_log_music_id`, `music_log_action`) VALUES (?, ?, ?);', params)
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  const insertSleepLog = async (sleep_log_user_id, sleep_log_sleep_id, sleep_log_action) => {
    try {
      const connection = await pool.getConnection()
      const params = [sleep_log_user_id, sleep_log_sleep_id, sleep_log_action]
      await connection.query('INSERT INTO `SHIM`.`SLEEP_LOG_TB` (`sleep_log_user_id`, `sleep_log_sleep_id`, `sleep_log_action`) VALUES (?, ?, ?);', params)
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  const insertVideoLog = async (video_log_user_id, video_log_video_id, video_log_action) => {
    try {
      const connection = await pool.getConnection()
      const params = [video_log_user_id, video_log_video_id, video_log_action]
      await connection.query('INSERT INTO `SHIM`.`VIDEO_LOG_TB` (`video_log_user_id`, `video_log_video_id`, `video_log_action`) VALUES (?, ?, ?);', params)
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  router.post('/frag', async (req, res) => {
    try {
      const f_enter_log_user_id = req.body.f_enter_log_user_id
      const f_enter_log_type = req.body.f_enter_log_type

      await insertFragmentEnterLog(f_enter_log_user_id, f_enter_log_type)

      res.status(200).json({ 'status': 200, 'msg': 'ok' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  router.post('/main', async (req, res) => {
    try {
      const main_log_user_id = req.body.main_log_user_id
      const main_log_pic_id = req.body.main_log_pic_id
      const main_log_action = req.body.main_log_action

      await insertMainLog(main_log_user_id, main_log_pic_id, main_log_action)

      res.status(200).json({ 'status': 200, 'msg': 'ok' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  router.post('/music', async (req, res) => {
    try {
      const music_log_user_id = req.body.music_log_user_id
      const music_log_music_id = req.body.music_log_music_id
      const music_log_action = req.body.music_log_action

      await insertMusicLog(music_log_user_id, music_log_music_id, music_log_action)

      res.status(200).json({ 'status': 200, 'msg': 'ok' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  router.post('/sleep', async (req, res) => {
    try {
      const sleep_log_user_id = req.body.sleep_log_user_id
      const sleep_log_sleep_id = req.body.sleep_log_sleep_id
      const sleep_log_action = req.body.sleep_log_action

      await insertSleepLog(sleep_log_user_id, sleep_log_sleep_id, sleep_log_action)

      res.status(200).json({ 'status': 200, 'msg': 'ok' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  router.post('/video', async (req, res) => {
    try {
      const video_log_user_id = req.body.video_log_user_id
      const video_log_video_id = req.body.video_log_video_id
      const video_log_action = req.body.video_log_action

      await insertVideoLog(video_log_user_id, video_log_video_id, video_log_action)

      res.status(200).json({ 'status': 200, 'msg': 'ok' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })


  return router
}
