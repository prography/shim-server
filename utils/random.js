// random.js
module.exports = (app) => {
  const express = require('express')
  const schedule = require('node-schedule')
  const router = express.Router()
  const pool = app.get('pool')

  const mainListShuffle = async () => {
    try {
      const connection = await pool.getConnection()

      let numbers = []
      const [temp] = await connection.query('SELECT COUNT(*) FROM SHIM.MAIN_TB;')
      console.log(temp)
      const count = temp[0]['COUNT(*)']

      for (let i=0; i<count; i++) {//1~열개수 사이의 값을 겹치지 않고 랜덤하게 저장
        numbers[i] = Math.floor(Math.random() * count) + 1
        for (let j=0; j<i; j++) {
          if (numbers[i] == numbers[j]) {
            i = i-1;
            break;
          }
        }
      }

      for (let i=1; i<=count; i++) {
        await connection.query('UPDATE SHIM.MAIN_TB SET main_order = ? WHERE main_id = ?;', [numbers[i-1], i])
      }

      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  // video list shuffle
  const videoListShuffle = async () => {
    const connection = await pool.getConnection()
    try {
      let [temp] = await connection.query('SELECT VIDEO_TB.video_id FROM SHIM.VIDEO_TB;') // video_id만 불러옴
      temp.sort(function(a, b){return 0.5 - Math.random()}); // video_id 랜덤하게 정렬

      for (let i=1; i<=temp.length; i++) {
        await connection.query('UPDATE SHIM.VIDEO_TB SET video_order=? WHERE video_id=?', [temp[i-1]['video_id'], i])//music_order에 랜덤값 저장
      }
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  // sleep list shuffle
  const sleepListShuffle = async () => {
    const connection = await pool.getConnection()
    try {
      let [temp] = await connection.query('SELECT SLEEP_TB.sleep_id FROM SHIM.SLEEP_TB;')
      temp.sort(function(a, b){return 0.5 - Math.random()});

      for (let i=1; i<=temp.length; i++) {
        await connection.query('UPDATE SHIM.SLEEP_TB SET sleep_order=? WHERE sleep_id=?', [temp[i-1]['sleep_id'], i])
      }
      connection.release()
      return true
    } catch (err) {
      connection.release()
      throw new Error(err)
    }
  }

  // music list shuffle
  const musicListShuffle = async () => {
    const connection = await pool.getConnection()
    try {
      let [temp] = await connection.query('SELECT music_id FROM SHIM.MUSIC_TB;') //music_id만 불러옴
      temp.sort(function(a, b){return 0.5 - Math.random()}); //music_id 랜덤하게 정렬

      for (let i=1; i<=temp.length; i++) {
        await connection.query('UPDATE SHIM.MUSIC_TB SET music_order = ? WHERE music_id = ?;', [temp[i-1]['music_id'], i])//music_order에 랜덤값 저장
      }
      connection.release()
      return true
    } catch (err) {
      throw new Error(err)
    }
  }

  const update = schedule.scheduleJob('00 00 00 * * *', async () => {
    try {
      await mainListShuffle()
      await videoListShuffle()
      await sleepListShuffle()
      await musicListShuffle()
    } catch (err) {
      console.log(err)
    }
  })

  // const updateSleep = schedule.scheduleJob('00 * * * * *', async () => {
  //   try {
  //     await sleepListShuffle()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // })

}
