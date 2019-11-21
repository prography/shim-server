const Plan = require('../models/Plan');
const pool = require('../database');

/**
 * @param {number} id
 * @returns {?Plan}
 */
const find = async (id) => {
  const [[row]] = await pool.query('SELECT * FROM plans WHERE id = ? LIMIT 1', [id]);
  if (row) {
    const plan = Plan.create(row);
    return plan;
  }
  return null;
};

/**
 * @returns {Array.<Plan>}
 */
const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM plans');
  const plans = rows.map(Plan.create);
  return plans;
};

module.exports = {
  find,
  getAll,
};
