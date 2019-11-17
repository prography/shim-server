const { Router } = require('express');
const authors = require('../controllers/authors');

const router = Router();

router.get('/', authors.getAuthors);
router.get('/:id', authors.getAuthor);

module.exports = Router;
