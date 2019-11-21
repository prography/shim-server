class Plan {
  /**
   * @param {number} id 상품 아이디
   * @param {string} name 상품 이름
   * @param {number} cost 상품 가격(원)
   * @param {number} duration 상품 기간(일)
   */
  constructor(id, name, cost, duration) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.duration = duration;
  }
}

module.exports = Plan;
