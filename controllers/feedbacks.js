const BadRequestError = require('../errors/BadRequestError');
const service = require('../services/feedbacks');
const { isString, isValidString } = require('../utils/types');

const saveFeedback = async (req, res) => {
  const { token } = req;
  const { title, content } = req.body;
  if (isValidString(title)) {
    await service.saveFeedback(token.uid, title, isString(content) ? content : null);
    res.json({
      status: 200,
      message: 'success',
    });
  } else {
    throw new BadRequestError('The given title is invalid');
  }
};

module.exports = {
  saveFeedback,
};
