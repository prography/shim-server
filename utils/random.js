// random.js
module.exports = (app) => {
  const express = require('express')
  const schedule = require('node-schedule')
  const router = express.Router()
  const pool = app.get('pool')

  const updateRandomly = async () => {
    try {
      const connection = await pool.getConnection()

      let numbers = []
      const [temp] = await connection.query('SELECT COUNT(*) FROM SHIM.MAIN_TB;')
      const count = temp[0]['COUNT(*)']

      for (let i=0; i<count; i++) {
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

  // const update = schedule.scheduleJob('* * 0 * * *', () => {
  //   await updateRandomly()
  // })
  const update = schedule.scheduleJob('00 00 00 * * *', async () => {
    try {
      await updateRandomly()
    } catch (err) {
      console.log(err)
    }
  })

}
