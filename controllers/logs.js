const BadRequestError = require('../errors/BadRequestError');
const service = require('../services/logs');
const { isString, isWholeNumber } = require('../utils/types');

const saveMusicLog = async (req, res) => {
  const { token } = req;
  const { musicId, action } = req.body;
  if (isWholeNumber(Number(musicId))) {
    await service.saveMusicLog(token.uid, Number(musicId), isString(action) ? action : null);
    res.json({
      status: 200,
      message: 'success',
    });
  } else {
    throw new BadRequestError('The given musicId is invalid');
  }
};

const saveShimLog = async (req, res) => {
  const { token } = req;
  const { shimId, action } = req.body;
  if (isWholeNumber(Number(shimId))) {
    await service.saveShimLog(token.uid, Number(shimId), isString(action) ? action : null);
    res.json({
      status: 200,
      message: 'success',
    });
  } else {
    throw new BadRequestError('The given shimId is invalid');
  }
};

const saveUiLog = async (req, res) => {
  const { token } = req;
  const { action } = req.body;
  if (isString(action)) {
    await service.saveUiLog(token.uid, isString(action) ? action : null);
    res.json({
      status: 200,
      message: 'success',
    });
  } else {
    throw new BadRequestError('The given action is invalid');
  }
};

module.exports = {
  saveMusicLog,
  saveShimLog,
  saveUiLog,
};
