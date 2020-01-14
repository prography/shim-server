class ResponseError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    this.name = 'ResponseError';
  }
}

module.exports = ResponseError;
