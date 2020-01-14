class Subscription {
  static create(row) {
    const {
      id, planId, userId,
      valid,
      startedAt, endedAt, canceledAt,
    } = row;
    return new Subscription(
      id, planId, userId,
      valid,
      startedAt, endedAt, canceledAt,
    );
  }

  /**
   * @param {number} id 구독 아이디
   * @param {number} planId 상품 아이디
   * @param {number} userId 사용자 아이디
   * @param {boolean} valid 구독 여부
   * @param {Date} startedAt 구독 시작일
   * @param {Date} endedAt 구독 종료일
   * @param {?Date} canceledAt 구독 취소일
   */
  constructor(id, planId, userId, valid, startedAt, endedAt, canceledAt) {
    this.id = id;
    this.planId = planId;
    this.userId = userId;
    this.valid = valid;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.canceledAt = canceledAt;
  }

  toJSON() {
    const {
      id, planId, userId,
      valid,
      startedAt, endedAt, canceledAt,
    } = this;
    return {
      id,
      planId,
      userId,
      valid,
      startedAt,
      endedAt,
      canceledAt,
    };
  }
}

module.exports = Subscription;
