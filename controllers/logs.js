const service = require('../services/logs');

const saveMusicLog = async (req, res) => {
  const { token } = req;
  const { musicId, action } = req.body;
  await service.saveMusicLog(token.uid, musicId, action);
  res.end();
};

const saveShimLog = async (req, res) => {
  const { token } = req;
  const { shimId, action } = req.body;
  await service.saveShimLog(token.uid, shimId, action);
  res.end();
};

const saveUiLog = async (req, res) => {
  const { token } = req;
  const { action } = req.body;
  await service.saveUiLog(token.uid, action);
  res.end();
};

module.exports = {
  saveMusicLog,
  saveShimLog,
  saveUiLog,
};
