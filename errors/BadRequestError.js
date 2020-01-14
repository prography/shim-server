const ResponseError = require('./ResponseError');

class BadRequestError extends ResponseError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.name = 'BadRequestError';
  }
}

module.exports = BadRequestError;
