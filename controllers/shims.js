const service = require('../services/shims');

const getShim = async (req, res) => {
  const { id } = req.params;
  const shim = await service.getShim(id);
  res.json(shim.toJSON());
};

const getShims = async (_, res) => {
  const shims = await service.getShims();
  res.json(shims.toJSON());
};

module.exports = {
  getShim,
  getShims,
};
