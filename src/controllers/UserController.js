const UserService = require('../services/UserService');

const createAccount = (req, res) => {
  const userService = new UserService();
  userService.createAccount(/* todo */);
  // todo
  res.end();
};

const deleteAccount = (req, res) => {
  const { uid } = req;
  const userService = new UserService();
  userService.deleteAccount(uid);
  res.send({
    status: 'success',
  });
};

const getInformation = (req, res) => {
  const { uid } = req;
  const userService = new UserService();
  const user = userService.getAccount(uid);
  res.send({
    status: 'success',
    data: user.toJSON(),
  });
};

const getSubscription = (req, res) => {
  const { uid } = req;
  const userService = new UserService();
  const subscription = userService.getSubscription(uid);
  res.send({
    status: 'success',
    data: subscription.toJSON(),
  });
};

const login = (req, res) => {
  const { uid } = req;
  const userService = new UserService();
  userService.login(/* todo */);
  // todo
  res.end();
};

const subscribe = (req, res) => {
  const { uid } = req;
  const userService = new UserService();
  userService.subscribe(uid, planId);
  res.send({
    status: 'success',
  });
};

const unsubscribe = (req, res) => {
  const { uid } = req;
  const userService = new UserService();
  userService.unsubscribe(uid);
  res.send({
    status: 'success',
  });
};

const updateInformation = (req, res) => {
  const { uid } = req;
  const userService = new UserService();
  userService.updateInformation();
  res.send({
    status: 'success',
  });
};

module.exports = {
  createAccount,
  deleteAccount,
  getInformation,
  getSubscription,
  login,
  subscribe,
  unsubscribe,
  updateInformation,
};
