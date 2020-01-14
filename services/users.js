const userRepository = require('../repositories/users');
const subcriptionRepository = require('../repositories/subscriptions');
const { signToken, verifyIdToken } = require('../utils/auth');

/**
 * @param {string} uid
 */
const disableUser = async (uid) => {
  await userRepository.updateByUid(uid, { status: 1 });
};

/**
 * @param {string} uid
 * @returns {?User}
 */
const getUser = async (uid) => {
  const user = await userRepository.findByUid(uid);
  return user;
};

/**
 * @param {string} uid
 * @returns {?Subscription}
 */
const getSubscription = async (uid) => {
  const subscription = await subcriptionRepository.findByUid(uid);
  return subscription;
};

/**
 * @param {string} idToken
 * @returns {string} JWT
 */
const login = async (idToken) => {
  const payload = await verifyIdToken(idToken);
  const uid = payload.sub;
  if (!await userRepository.exists(uid)) {
    await userRepository.create(uid);
  }
  const token = await signToken({ uid });
  return token;
};

/**
 * @param {string} uid
 * @param {number} planId
 */
const subscribe = async (uid, planId) => {
  await subcriptionRepository.create(planId, uid);
};

/**
 * @param {string} uid
 */
const unsubscribe = async (uid) => {
  await subcriptionRepository.updateByUid(uid, { valid: 0, canceled_at: new Date() });
};

/**
 * @param {string} uid
 * @param {Object} data
 */
const updateUser = async (uid, data) => {
  await userRepository.updateByUid(uid, data);
};

module.exports = {
  disableUser,
  getUser,
  getSubscription,
  login,
  subscribe,
  unsubscribe,
  updateUser,
};
