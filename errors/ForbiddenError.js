const ResponseError = require('./ResponseError');

class ForbiddenError extends ResponseError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
    this.name = 'ForbiddenError';
  }
}

module.exports = ForbiddenError;
