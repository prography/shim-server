const authorRepository = require('../repositories/authors');

/**
 * @param {number} id
 * @returns {?Author}
 */
const getAuthor = async (id) => {
  const author = await authorRepository.find(id);
  return author;
};

/**
 * @returns {Array.<Author>}
 */
const getAuthors = async () => {
  const authors = await authorRepository.getAll();
  return authors;
};

module.exports = {
  getAuthor,
  getAuthors,
};
