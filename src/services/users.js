const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/users');
const subcriptionRepository = require('../repositories/subscriptions');

dotenv.config();

const {
  JWT_EXPIRED, JWT_ISSUER, JWT_SECRET,
  OAUTH_CLIENT_ID,
} = process.env;
const JWT_OPTIONS = { expiresIn: JWT_EXPIRED, issuer: JWT_ISSUER };

/**
 * @param {string} uid
 */
const disableUser = async (uid) => {
  await userRepository.updateByUid(uid, { status: 1 });
};

/**
 * @param {string} googleToken
 * @returns {string} JWT
 */
const login = async (googleToken) => {
  const oAuth2Client = new OAuth2Client(OAUTH_CLIENT_ID);
  const ticket = oAuth2Client.verifyIdToken({ idToken: googleToken, audience: OAUTH_CLIENT_ID });
  const payload = ticket.getPayload();
  const uid = payload.sub;
  if (!await userRepository.exists(uid)) {
    await userRepository.create(uid);
  }
  const token = jwt.sign({ uid }, JWT_SECRET, JWT_OPTIONS);
  return token;
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
  login,
  getUser,
  getSubscription,
  subscribe,
  unsubscribe,
  updateUser,
};
