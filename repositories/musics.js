const Music = require('../models/Music');
const pool = require('../database');

/**
 * @param {number} id
 * @returns {?Music}
 */
const find = async (id) => {
  const [[row]] = await pool.query('SELECT * FROM musics WHERE id = ? LIMIT 1', [id]);
  if (row) {
    const music = Music.create(row);
    return music;
  }
  return null;
};

/**
 * @returns {Array.<Music>}
 */
const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM musics');
  const musics = rows.map(Music.create);
  return musics;
};

module.exports = {
  find,
  getAll,
};
