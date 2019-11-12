class ShimLog {
  /**
   * @param {number} id 쉼 로그 아이디
   * @param {number} shimId 쉼 아이디
   * @param {number} userId 사용자 아이디
   * @param {string} action 사용자 행동
   * @param {Date} createdAt 쉼 로그 생성시간
   */
  constructor(id, shimId, userId, action, createdAt) {
    this.id = id;
    this.shimId = shimId;
    this.userId = userId;
    this.action = action;
    this.createdAt = createdAt;
  }
}

module.exports = ShimLog;
