const musicRepository = require('../repositories/musics');

/**
 * @param {number} id
 * @returns {?Music}
 */
const getMusic = async (id) => {
  const music = await musicRepository.find(id);
  return music;
};

/**
 * @returns {Array.<Music>}
 */
const getMusics = async () => {
  const musics = await musicRepository.getAll();
  return musics;
};

module.exports = {
  getMusic,
  getMusics,
};
