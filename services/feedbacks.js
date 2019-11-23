const feedbackRepository = require('../repositories/feedbacks');

/**
 * @param {string} uid
 * @param {string} title
 * @param {?string} content
 */
const saveFeedback = async (uid, title, content) => {
  await feedbackRepository.create(uid, title, content);
};

module.exports = {
  saveFeedback,
};
