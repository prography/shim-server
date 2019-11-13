class Subscription {
  static get Builder() {
    return class {
      constructor() {
        this.id = -1;
        this.planId = -1;
        this.userId = -1;
        this.valid = false;
        this.startedAt = null;
        this.endedAt = null;
        this.canceledAt = null;
      }

      setId(id) {
        this.id = id;
        return this;
      }

      setPlanId(planId) {
        this.planId = planId;
        return this;
      }

      setUserId(userId) {
        this.userId = userId;
        return this;
      }

      setValid(valid) {
        this.valid = valid;
        return this;
      }

      setStartedAt(startedAt) {
        this.startedAt = startedAt;
        return this;
      }

      setEndedAt(endedAt) {
        this.endedAt = endedAt;
        return this;
      }

      setCanceledAt(canceledAt) {
        this.canceledAt = canceledAt;
        return this;
      }

      build() {
        const {
          id, planId, userId,
          valid,
          startedAt, endedAt, canceledAt,
        } = this;
        return new Subscription(id, planId, userId, valid, startedAt, endedAt, canceledAt);
      }
    };
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
