// music.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const selectByCategory = async (category) => {
    try {
      const connection = await pool.getConnection()
      let result
      if (category === 'all') { //category가 all일때
        [result] = await connection.query('SELECT music_id, music_name, music_music, music_author, music_picture FROM SHIM.MUSIC_TB ORDER BY music_order ASC;')
      } else {      //category가 선택되어있을 때                   
        [result] = await connection.query('SELECT music_id, music_name, music_music, music_author, music_picture FROM SHIM.MUSIC_TB WHERE music_category like ? ORDER BY music_order ASC;', category)
      }
      connection.release()
      return result
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  const selectMyInfo = async (user_id) => {
    try {
      const connection = await pool.getConnection()
      const result = await connection.query('SELECT music_id, music_name, music_music, music_author, music_picture FROM SHIM.MUSIC_TB, SHIM.MY_TB WHERE MY_TB.my_user_id like ? AND MY_TB.my_music_id = MUSIC_TB.music_id;', [user_id])
      connection.release()
      return result[0]
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  const insertMyMusic = async (user_id, music_id) => {
    try {
      const connection = await pool.getConnection()
      const result = await connection.query('INSERT INTO SHIM.MY_TB (my_user_id, my_music_id) VALUES (?, ?);', [user_id, music_id])
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }


  router.get('/:category', async (req, res) => {
    const category = req.params.category // all, my, relax, focus
    try {
      let result
      if (category === 'my') {
        const user_id = req.query.id
        result = await selectMyInfo(user_id)
      } else {
        console.log(category)
        result = await selectByCategory(category)
      }
      res.status(200).json({ 'status': 200, 'arr': result }) // arr, data, msg
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  router.post('/', async (req, res) => {
    try {
      const user_id = req.body.user_id
      const music_id = req.body.music_id
      await insertMyMusic(user_id, music_id)
      res.status(200).json({ 'status': 200, 'msg': 'ok!' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
