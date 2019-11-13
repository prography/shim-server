const auth = (req, res, next) => {
  const uid = req.header('Authorization');
  // todo: check uid
  req.uid = uid;
  next();
};

module.exports = auth;
