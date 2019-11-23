class Shim {
  static create(row) {
    const {
      id, authorId,
      title, category, description, thumbnail,
      duration, createdAt,
    } = row;
    return new Shim(
      id, authorId,
      title, category, description, thumbnail,
      duration, createdAt,
    );
  }

  /**
   * @param {number} id 쉼 아이디
   * @param {number} authorId 제공자 아이디
   * @param {string} title 쉼 제목
   * @param {number} category 쉼 분류
   * @param {?string} description 쉼 설명
   * @param {?string} thumbnail 쉼 썸네일 링크
   * @param {number} duration 쉼 재생시간(초)
   * @param {Date} createdAt 쉼 등록시간
   */
  constructor(id, authorId, title, category, description, thumbnail, duration, createdAt) {
    this.id = id;
    this.authorId = authorId;
    this.title = title;
    this.category = category;
    this.description = description;
    this.thumbnail = thumbnail;
    this.duration = duration;
    this.createdAt = createdAt;
  }

  toJSON() {
    const {
      id, authorId,
      title, category, description, thumbnail,
      duration, createdAt,
    } = this;
    return {
      id,
      authorId,
      title,
      category,
      description,
      thumbnail,
      duration,
      createdAt,
    };
  }
}

module.exports = Shim;
