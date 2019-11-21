const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors');

const { JsonWebTokenError, NotBeforeError, TokenExpiredError } = jwt;

dotenv.config();

const {
  JWT_EXPIRED, JWT_ISSUER, JWT_SECRET,
  NODE_ENV,
} = process.env;
const JWT_OPTIONS = { expiresIn: JWT_EXPIRED, issuer: JWT_ISSUER };
const SCHEMA_REGEX = /^Bearer ([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)$/;

const verifyToken = (req, res, next) => {
  const schema = req.header('Authorization');
  if (SCHEMA_REGEX.test(schema)) {
    const [, token] = SCHEMA_REGEX.exec(schema);
    jwt.verify(token, JWT_SECRET, JWT_OPTIONS, (err, decoded) => {
      if (decoded) {
        if (NODE_ENV === 'development') {
          console.log('user token', decoded);
        }
        req.token = decoded;
        next();
      } else {
        switch (err.constructor) {
          case JsonWebTokenError:
            next(new UnauthorizedError(`Token was invalid - ${err.message}`));
            break;
          case NotBeforeError:
            next(new UnauthorizedError('Token was not active'));
            break;
          case TokenExpiredError:
            next(new UnauthorizedError(`Token was expired - exp: ${new Date(err.expiredAt)})`));
            break;
          default:
            next(new UnauthorizedError('Unexpected error occured'));
        }
      }
    });
  } else {
    next(new UnauthorizedError('Cannot find token'));
  }
};

module.exports = { verifyToken };
