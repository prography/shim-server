const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const service = require('../services/shims');
const { isWholeNumber } = require('../utils/types');

const getShim = async (req, res) => {
  const { id } = req.params;
  if (isWholeNumber(Number(id))) {
    const shim = await service.getShim(Number(id));
    if (shim) {
      res.json({
        status: 200,
        shim: shim.toJSON(),
      });
    } else {
      throw new NotFoundError('The shim with the given id does not exist');
    }
  } else {
    throw new BadRequestError('The given id is invalid');
  }
};

const getShims = async (_, res) => {
  const shims = await service.getShims();
  res.json({
    status: 200,
    shims: shims.map((shim) => shim.toJSON()),
  });
};

module.exports = {
  getShim,
  getShims,
};
