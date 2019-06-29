// music.js
module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const pool = app.get('pool')

  const selectByCategory = async (category, user_id) => {
    try {
      const connection = await pool.getConnection()
      let result
      if (category === 'all') {
        [result] = await connection.query('SELECT music_id, music_name, music_music, music_author, music_picture FROM SHIM.MUSIC_TB;')
      } else {
        [result] = await connection.query('SELECT music_id, music_name, music_music, music_author, music_picture FROM SHIM.MUSIC_TB WHERE music_category like ?;', category)
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

  const updateMyMusic = async (user_id, music_id, my) => {
    try {
      const connection = await pool.getConnection()
      if (my === false) {
        console.log('f')
        const result = await connection.query('INSERT INTO SHIM.MY_TB (my_user_id, my_music_id) VALUES (?, ?);', [user_id, music_id])
        connection.release()
        return true
      } else {
        console.log('t')
        const result = await connection.query('DELETE FROM SHIM.MY_TB WHERE my_user_id = ? AND my_music_id = ?;', [user_id, music_id])
        connection.release()
        return true
      }
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  router.get('/:category', async (req, res) => {
    try {
      const category = req.params.category // all, my, relax, focus
      const user_id = req.query.id
      let result
      if (category === 'my') {
        result = await selectMyInfo(user_id)
      } else {
        result = await selectByCategory(category, user_id)
        const my_result = await selectMyInfo(user_id)
        for (let i in result) { // my에 추가되어 있는 music_i이면 true, 아니면 false
          result[i].my = false
          for (let j in my_result) {
            if (result[i].music_id === my_result[j].music_id) {
              result[i].my = true
              break
            }
            if (result[i].my === true) { break }
          }
        }
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
      const my = req.body.my
      await updateMyMusic(user_id, music_id, my)
      res.status(200).json({ 'status': 200, 'msg': 'ok!' })
    } catch (err) {
      res.status(500).json({ 'status': 500, 'msg': 'error!' })
    }
  })

  return router
}
