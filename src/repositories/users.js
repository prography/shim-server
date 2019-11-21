const User = require('../models/User');
const pool = require('../database');

/**
 * @param {string} uid
 */
const create = async (uid) => {
  await pool.query('INSERT INTO users (uid, status, created_at) VALUES (?, 1, NOW())', [uid]);
};

/**
 * @param {string} uid
 * @returns {boolean}
 */
const exists = async (uid) => {
  const [rows] = await pool.query('SELECT uid FROM users WHERE uid = ? LIMIT 1', [uid]);
  return rows.length > 0;
};

/**
 * @param {string} uid
 * @returns {?User}
 */
const findByUid = async (uid) => {
  const [[row]] = await pool.query('SELECT * FROM users WHERE uid = ? LIMIT 1', [uid]);
  if (row) {
    const user = User.create(row);
    return user;
  }
  return null;
};

/**
 * @param {string} uid
 * @param {Object} data
 */
const updateByUid = async (uid, data) => {
  await pool.query('UPDATE users SET ? WHERE uid = ?', [data, uid]);
};

module.exports = {
  create,
  exists,
  findByUid,
  updateByUid,
};
