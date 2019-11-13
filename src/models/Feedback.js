class Feedback {
  /**
   * @param {number} id 피드백 아이디
   * @param {number} userId 사용자 아이디
   * @param {?string} title 피드백 제목
   * @param {string} content 피드백 내용
   * @param {Date} createdAt 피드백 생성시간
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
