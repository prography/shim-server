const mysql = require('mysql2');


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
}).promise();

module.exports = pool;
