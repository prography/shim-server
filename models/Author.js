class Author {
  static create(row) {
    const {
      id,
      email, name, profile, about,
    } = row;
    return new Author(
      id,
      email, name, profile, about,
    );
  }

  /**
   * @param {number} id 저자 아이디
   * @param {?string} email 저자 이메일
   * @param {string} name 저자 이름
   * @param {?string} profile 저자 사진 링크
   * @param {?string} about 저자 소개
   */
  constructor(id, email, name, profile, about) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.profile = profile;
    this.about = about;
  }

  toJSON() {
    const {
      id,
      email, name, profile, about,
    } = this;
    return {
      id,
      email,
      name,
      profile,
      about,
    };
  }
}

module.exports = Author;
