class User {
  static create(row) {
    const {
      id, uid,
      email, name, status, deviceId,
      createdAt, updatedAt, deletedAt, loginAt,
    } = row;
    return new User(
      id, uid,
      email, name, status, deviceId,
      createdAt, updatedAt, deletedAt, loginAt,
    );
  }

  /**
   * @param {number} id 사용자 아이디
   * @param {string} uid 고유 아이디
   * @param {?string} email 사용자 이메일
   * @param {?string} name 사용자 이름
   * @param {number} status 사용자 상태
   * @param {?string} deviceId 디바이스 아이디
   * @param {Date} createdAt 사용자 가입시간
   * @param {?Date} updatedAt 사용자 정보 수정시간
   * @param {?Date} deletedAt 사용자 탈퇴시간
   * @param {?Date} loginAt 사용자 마지막 접속시간
   */
  constructor(id, uid, email, name, status, deviceId, createdAt, updatedAt, deletedAt, loginAt) {
    this.id = id;
    this.uid = uid;
    this.email = email;
    this.name = name;
    this.status = status;
    this.deviceId = deviceId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.loginAt = loginAt;
  }

  toJSON() {
    const {
      id, uid,
      email, name, status, deviceId,
      createdAt, updatedAt, deletedAt, loginAt,
    } = this;
    return {
      id,
      uid,
      email,
      name,
      status,
      deviceId,
      createdAt,
      updatedAt,
      deletedAt,
      loginAt,
    };
  }
}

module.exports = User;
