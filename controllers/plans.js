const service = require('../services/plans');

const getPlan = async (req, res) => {
  const { id } = req.params;
  const plan = await service.getPlan(id);
  res.json(plan.toJSON());
};

const getPlans = async (_, res) => {
  const plans = await service.getPlans();
  res.json(plans.toJSON());
};

module.exports = {
  getPlan,
  getPlans,
};
