const handleAsync = (asyncFn) => async (req, res, next) => {
  try {
    return await asyncFn(req, res, next);
  } catch (e) {
    return next(e);
  }
};

module.exports = { handleAsync };
