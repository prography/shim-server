class Music {
  static create(row) {
    const {
      id, authorId,
      title, category, thumbnail, src, duration,
      createdAt,
    } = row;
    return new Music(
      id, authorId,
      title, category, thumbnail, src, duration,
      createdAt,
    );
  }

  /**
   * @param {number} id 음악 아이디
   * @param {number} authorId 저자 아이디
   * @param {string} title 음악 제목
   * @param {number} category 음악 분류
   * @param {?string} thumbnail 음악 썸네일 링크
   * @param {string} src 음악 파일 링크
   * @param {number} duration 음악 재생시간(초)
   * @param {Date} createdAt 음악 등록시간
   */
  constructor(id, authorId, title, category, thumbnail, src, duration, createdAt) {
    this.id = id;
    this.authorId = authorId;
    this.title = title;
    this.category = category;
    this.thumbnail = thumbnail;
    this.src = src;
    this.duration = duration;
    this.createdAt = createdAt;
  }

  toJSON() {
    const {
      id, authorId,
      title, category, thumbnail, src, duration,
      createdAt,
    } = this;
    return {
      id,
      authorId,
      title,
      category,
      thumbnail,
      src,
      duration,
      createdAt,
    };
  }
}

module.exports = Music;
