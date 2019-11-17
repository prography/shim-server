const Subscription = require('../models/Subscription');
const pool = require('../database');

/**
 * @param {number} planId
 * @param {string} uid
 */
const create = async (planId, uid) => {
  await pool.query(`
    INSERT INTO subscriptions (planId, user_id, status, created_at, ended_at)
    VALUES (
      ?,
      SELECT user_id FROM users WHERE uid = ?,
      1,
      NOW(),
      DATE_ADD(NOW(), INTERVAL (SELECT duration FROM plans WHERE id = ?) DAY)
    )
    `, [planId, uid, planId]);
};

/**
 * @param {string} uid
 * @returns {?Subscription}
 */
const findByUid = async (uid) => {
  const [[row]] = await pool.query('SELECT * FROM subscriptions WHERE uid = ? AND valid = 1 LIMIT 1', [uid]);
  if (row) {
    const subscription = Subscription.create(row);
    return subscription;
  }
  return null;
};

/**
 * @param {string} uid
 * @param {Object} data
 */
const updateByUid = async (uid, data) => {
  await pool.query('UPDATE subscriptions SET ? WHERE uid = ?', [data, uid]);
};

module.exports = {
  create,
  findByUid,
  updateByUid,
};
