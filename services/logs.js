const logRepository = require('../repositories/logs');

/**
 * @param {string} uid
 * @param {number} musicId
 * @param {string} action
 */
const saveMusicLog = async (uid, musicId, action) => {
  await logRepository.createMusicLog(uid, musicId, action);
};

/**
 * @param {string} uid
 * @param {number} shimId
 * @param {string} action
 */
const saveShimLog = async (uid, shimId, action) => {
  await logRepository.saveShimLog(uid, shimId, action);
};

/**
 * @param {string} uid
 * @param {string} action
 */
const saveUiLog = async (uid, action) => {
  await logRepository.saveUiLog(uid, action);
};

module.exports = {
  saveMusicLog,
  saveShimLog,
  saveUiLog,
};
