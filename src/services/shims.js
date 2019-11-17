const shimRepository = require('../repositories/shims');

/**
 * @param {number} id
 * @returns {?Shim}
 */
const getShim = async (id) => {
  const shim = await shimRepository.find(id);
  return shim;
};

/**
 * @returns {Array.<Shim>}
 */
const getShims = async () => {
  const shims = await shimRepository.getAll();
  return shims;
};

module.exports = {
  getShim,
  getShims,
};
