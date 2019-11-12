class MusicLog {
  /**
   * @param {number} id 음악 로그 아이디
   * @param {number} musicId 음악 아이디
   * @param {number} userId 사용자 아이디
   * @param {string} action 사용자 행동
   * @param {Date} createdAt 음악 로그 생성시간
   */
  constructor(id, musicId, userId, action, createdAt) {
    this.id = id;
    this.musicId = musicId;
    this.userId = userId;
    this.action = action;
    this.createdAt = createdAt;
  }
}

module.exports = MusicLog;
