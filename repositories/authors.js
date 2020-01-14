const Author = require('../models/Author');
const pool = require('../database');

/**
 * @param {number} id
 * @returns {?Author}
 */
const find = async (id) => {
  const [[row]] = await pool.query('SELECT * FROM authors WHERE id = ? LIMIT 1', [id]);
  if (row) {
    const author = Author.create(row);
    return author;
  }
  return null;
};

/**
 * @returns {Array.<Author>}
 */
const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM authors');
  const authors = rows.map(Author.create);
  return authors;
};

module.exports = {
  find,
  getAll,
};
