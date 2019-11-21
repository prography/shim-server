const Shim = require('../models/Shim');
const pool = require('../database');

/**
 * @param {number} id
 * @returns {?Shim}
 */
const find = async (id) => {
  const [[row]] = await pool.query('SELECT * FROM shims WHERE id = ? LIMIT 1', [id]);
  if (row) {
    const shim = Shim.create(row);
    return shim;
  }
  return null;
};

/**
 * @returns {Array.<Shim>}
 */
const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM shims');
  const shims = rows.map(Shim.create);
  return shims;
};

module.exports = {
  find,
  getAll,
};
