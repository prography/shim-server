class Feedback {
  /**
   * @param {number} id
   * @param {number} userId
   * @param {string} title
   * @param {string} content
   * @param {Date} createdAt
   */
  constructor(id, userId, title, content, createdAt) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
  }
}

module.exports = Feedback;
