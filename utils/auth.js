const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');
const jwtPromises = require('./jwtPromises');
const SchemaError = require('../errors/SchemaError');

dotenv.config();

const {
  JWT_EXPIRED, JWT_ISSUER, JWT_SECRET,
  OAUTH_CLIENT_ID,
} = process.env;
const JWT_OPTIONS = { expiresIn: JWT_EXPIRED, issuer: JWT_ISSUER };
const SCHEMA_REGEX = /^Bearer ([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)$/;

/**
 * Bearer 인증스킴 토큰을 가져옵니다.
 * @async
 * @param {string} schema
 * @returns {Promise.<string>}
 */
const getBearerToken = (schema) => new Promise((resolve, reject) => {
  if (SCHEMA_REGEX.test(schema)) {
    const [, token] = SCHEMA_REGEX.exec(schema);
    resolve(token);
  } else {
    reject(new SchemaError('Cannot find a token'));
  }
});

/**
 * JWT를 만들어 반환합니다.
 * @async
 * @param {Object} payload
 * @returns {Promise.<string>}
 */
const signToken = async (payload) => {
  const token = await jwtPromises.sign(payload, JWT_SECRET, JWT_OPTIONS);
  return token;
};

/**
 * JWT의 무결성을 확인하고 토큰정보를 반환합니다.
 * @async
 * @param {string} token
 * @returns {Object}
 */
const verifyToken = async (token) => {
  const payload = await jwtPromises.verify(token, JWT_SECRET, JWT_OPTIONS);
  return payload;
};

/**
 * ID 토큰의 무결성을 확인하고 토큰정보를 반환합니다.
 * @async
 * @param {string} idToken
 * @returns {Object}
 */
const verifyIdToken = async (idToken) => {
  const oAuth2Client = new OAuth2Client(OAUTH_CLIENT_ID);
  const ticket = await oAuth2Client.verifyIdToken({ idToken, audience: OAUTH_CLIENT_ID });
  const payload = ticket.getPayload();
  return payload;
};

module.exports = {
  getBearerToken,
  signToken,
  verifyToken,
  verifyIdToken,
};
