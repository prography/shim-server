const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const service = require('../services/authors');
const { isWholeNumber } = require('../utils/types');

const getAuthor = async (req, res) => {
  const { id } = req.params;
  if (isWholeNumber(Number(id))) {
    const author = await service.getAuthor(Number(id));
    if (author) {
      res.json({
        status: 200,
        author: author.toJSON(),
      });
    } else {
      throw new NotFoundError('The author with the given id does not exist');
    }
  } else {
    throw new BadRequestError('The given id is invalid');
  }
};

const getAuthors = async (_, res) => {
  const authors = await service.getAuthors();
  res.json({
    status: 200,
    authors: authors.map((author) => author.toJSON()),
  });
};

module.exports = {
  getAuthor,
  getAuthors,
};
