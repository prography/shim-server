const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

/**
 * 주어진 객체의 속성을 검사하는 함수를 실행해 결과를 반환합니다.
 * @param {Object} target
 * @param {Object} checkers
 * @returns {boolean}
 */
const checkObject = (target, checkers) => Object.entries(checkers)
  .every(([key, checker]) => (key in target ? checker(target[key]) : true));

/**
 * 주어진 객체에 유효하지 않은 속성을 제거한 새로운 객체를 반환합니다.
 * @param {Object} target
 * @param {Array.<string>} keys
 * @returns {Object}
 */
const filterObject = (target, keys) => Object.fromEntries(Object.entries(target)
  .filter(([key]) => keys.includes(key)));

/**
 * 주어진 값이 문자열인지 확인합니다.
 * @param {*} string
 * @returns {boolean}
 */
const isString = (string) => typeof string === 'string';

/**
 * 주어진 값이 이메일 형식인지 확인합니다.
 * @param {*} email
 * @returns {boolean}
 */
const isEmailString = (email) => isString(email) && EMAIL_REGEX.test(email);

/**
 * 주어진 값이 유효한 문자열인지 확인합니다.
 * @param {*} string
 * @returns {boolean}
 */
const isValidString = (string) => isString(string) && string.length > 0;

/**
 * 주어진 값이 자연수(whole number)인지 확인합니다.
 * @param {*} number
 * @returns {boolean}
 */
const isWholeNumber = (number) => Number.isSafeInteger(number) && number >= 0;

module.exports = {
  checkObject,
  filterObject,
  isEmailString,
  isString,
  isValidString,
  isWholeNumber,
};
