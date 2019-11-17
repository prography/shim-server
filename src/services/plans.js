const planRepository = require('../repositories/plans');

/**
 * @param {number} id
 * @returns {?Plan}
 */
const getPlan = async (id) => {
  const plan = await planRepository.find(id);
  return plan;
};

/**
 * @returns {Array.<Plan>}
 */
const getPlans = async () => {
  const plans = await planRepository.getAll();
  return plans;
};

module.exports = {
  getPlan,
  getPlans,
};
