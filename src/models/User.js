class User {
  /**
   * @param {number} id 사용자 아이디
   * @param {string} email 사용자 이메일
   * @param {?string} name 사용자 이름
   * @param {?string} deviceId 디바이스 아이디
   */
  constructor(id, email, name, deviceId) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.deviceId = deviceId;
  }
}

module.exports = User;
