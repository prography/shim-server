const pool = require('../database');

/**
 * @param {string} uid
 * @param {string} title
 * @param {?string} content
 */
const create = async (uid, title, content) => {
  await pool.query(`
    INSERT INTO feedbacks (user_id, title, content, created_at)
    VALUES (
      SELECT user_id FROM users WHERE uid = ?,
      ?,
      ?,
      NOW()
    )
    `, [uid, title, content]);
};

module.exports = {
  create,
};
