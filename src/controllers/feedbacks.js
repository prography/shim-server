const service = require('../services/feedbacks');

const saveFeedback = async (req, res) => {
  const { token } = req;
  const { title, content } = req.body;
  await service.saveFeedback(token.uid, title, content);
  res.send();
};

module.exports = {
  saveFeedback,
};
