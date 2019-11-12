class UiLog {
  /**
   * @param {number} id
   * @param {number} userId
   * @param {string} action
   * @param {Date} createdAt
   */
  constructor(id, userId, action, createdAt) {
    this.id = id;
    this.userId = userId;
    this.action = action;
    this.createdAt = createdAt;
  }
}

module.exports = UiLog;
