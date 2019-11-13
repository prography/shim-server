class UiLog {
  /**
   * @param {number} id UI 로그 아이디
   * @param {number} userId 사용자 아이디
   * @param {string} action 사용자 행동
   * @param {Date} createdAt UI 로그 생성시간
   */
  constructor(id, userId, action, createdAt) {
    this.id = id;
    this.userId = userId;
    this.action = action;
    this.createdAt = createdAt;
  }
}

module.exports = UiLog;
