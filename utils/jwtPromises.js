const jwt = require('jsonwebtoken');
const util = require('util');

const jwtPromises = {
  /**
   * JWT를 만들어 반환합니다.
   * @function
   * @param {Object} payload
   * @param {string} secret
   * @param {Object} options
   * @returns {Promise.<string>}
   */
  sign: util.promisify(jwt.sign),

  /**
   * JWT의 무결성을 확인하고 토큰정보를 반환합니다.
   * @function
   * @param {string} token
   * @param {string} secret
   * @param {Object} options
   * @returns {Promise.<Object>}
   */
  verify: util.promisify(jwt.verify),
};

module.exports = jwtPromises;
