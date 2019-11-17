const service = require('../services/users');

const getAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await service.getAuthor(id);
  res.json(author.toJSON());
};

const getAuthors = async (_, res) => {
  const authors = await service.getAuthors();
  res.json(authors.toJSON());
};

module.exports = {
  getAuthor,
  getAuthors,
};
