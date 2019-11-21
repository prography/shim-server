const pool = require('../database');

/**
 * @param {string} uid
 * @param {string} musicId
 * @param {string} action
 */
const createMusicLog = async (uid, musicId, action) => {
  await pool.query(`
    INSERT INTO music_logs (music_id, user_id, action, created_at)
    VALUES (
      ?,
      SELECT user_id FROM users WHERE uid = ?,
      ?,
      NOW()
    )
    `, [musicId, uid, action]);
};

/**
 * @param {string} uid
 * @param {string} shimId
 * @param {string} action
 */
const createShimLog = async (uid, shimId, action) => {
  await pool.query(`
    INSERT INTO shim_logs (shim_id, user_id, action, created_at)
    VALUES (
      ?,
      SELECT user_id FROM users WHERE uid = ?,
      ?,
      NOW()
    )
    `, [shimId, uid, action]);
};

/**
 * @param {string} uid
 * @param {string} action
 */
const createUiLog = async (uid, action) => {
  await pool.query(`
    INSERT INTO ui_logs ( user_id, action, created_at)
    VALUES (
      SELECT user_id FROM users WHERE uid = ?,
      ?,
      NOW()
    )
    `, [uid, action]);
};

module.exports = {
  createMusicLog,
  createShimLog,
  createUiLog,
};
