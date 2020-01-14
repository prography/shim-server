const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const service = require('../services/plans');
const { isWholeNumber } = require('../utils/types');

const getPlan = async (req, res) => {
  const { id } = req.params;
  if (isWholeNumber(Number(id))) {
    const plan = await service.getPlan(Number(id));
    if (plan) {
      res.json({
        status: 200,
        plan: plan.toJSON(),
      });
    } else {
      throw new NotFoundError('The plan with the given id does not exist');
    }
  } else {
    throw new BadRequestError('The given id is invalid');
  }
};

const getPlans = async (_, res) => {
  const plans = await service.getPlans();
  res.json({
    status: 200,
    plans: plans.map((plan) => plan.toJSON()),
  });
};

module.exports = {
  getPlan,
  getPlans,
};
