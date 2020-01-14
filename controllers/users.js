const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const service = require('../services/users');
const { getBearerToken } = require('../utils/auth');
const {
  checkObject, filterObject,
  isEmailString, isValidString, isWholeNumber,
} = require('../utils/types');

const { NODE_ENV } = process.env;

const disableUser = async (req, res) => {
  const { token } = req;
  await service.disableUser(token.uid);
  res.json({
    status: 200,
    message: 'success',
  });
};

const getUser = async (req, res) => {
  const { token } = req;
  const user = await service.getUser(token.uid);
  if (user) {
    res.json({
      status: 200,
      user: user.toJSON(),
    });
  } else {
    throw new NotFoundError('The user with the given token does not exist');
  }
};

const getSubscription = async (req, res) => {
  const { token } = req;
  const subscription = await service.getSubscription(token.uid);
  if (subscription) {
    res.json({
      status: 200,
      subscription: subscription.toJSON(),
    });
  } else {
    throw new NotFoundError('The subscription with the given token does not exist');
  }
};

const login = async (req, res) => {
  const schema = req.header('Authorization');
  const idToken = await getBearerToken(schema);
  if (NODE_ENV === 'development') {
    console.log('id token', idToken);
  }
  const token = await service.login(idToken);
  res.json({
    status: 200,
    token,
  });
};

const subscribe = async (req, res) => {
  const { token } = req;
  const { planId } = req.body;
  if (isWholeNumber(Number(planId))) {
    await service.subscribe(token.uid, Number(planId));
    res.json({
      status: 200,
      message: 'success',
    });
  } else {
    throw new BadRequestError('The given planId is invalid');
  }
};

const unsubscribe = async (req, res) => {
  const { token } = req;
  await service.unsubscribe(token.uid);
  res.json({
    status: 200,
    message: 'success',
  });
};

const updateUser = async (req, res) => {
  const { token } = req;
  const data = req.body;
  const filteredData = filterObject(data, ['email', 'name', 'deviceId']);
  if (checkObject(filteredData, {
    email: isEmailString,
    name: isValidString,
    deviceId: isValidString,
  })) {
    await service.updateUser(token.uid, data);
    res.json({
      status: 200,
      message: 'success',
    });
  } else {
    throw new BadRequestError('The given data is invalid');
  }
};

module.exports = {
  disableUser,
  getUser,
  getSubscription,
  login,
  subscribe,
  unsubscribe,
  updateUser,
};
