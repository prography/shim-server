// random.js

const updateRandomly = async () => {
  try {
    const express = require('express')
    const app = express()
    console.log(app)
    const pool = app.get('pool')
    console.log(pool)
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

    for (let i=0; i<count; i++) {
      const result = connection.query('UPDATE SHIM.MAIN_TB SET main_order = ? WHERE id = ?;', numbers[i], i)
    }
  } catch (err) {
      connection.release()
      throw new Error(err)
  }
}

updateRandomly()
