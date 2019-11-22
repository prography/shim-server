const { JsonWebTokenError, NotBeforeError, TokenExpiredError } = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { getBearerToken, verifyToken } = require('../utils/auth');

const verifyAuth = (req, _, next) => {
  const schema = req.header('Authorization');
  getBearerToken(schema)
    .then(verifyToken)
    .then((payload) => {
      req.token = payload;
      next();
    })
    .catch((reason) => {
      if (reason instanceof UnauthorizedError) {
        next(reason);
      } else {
        switch (reason.constructor) {
          case JsonWebTokenError:
            next(new UnauthorizedError(`Token was invalid - ${reason.message}`));
            break;
          case NotBeforeError:
            next(new UnauthorizedError('Token was not active'));
            break;
          case TokenExpiredError:
            next(new UnauthorizedError(`Token was expired - exp: ${new Date(reason.expiredAt)})`));
            break;
          default:
            next(new UnauthorizedError('Unexpected error occured'));
        }
      }
    });
};

module.exports = { verifyAuth };
