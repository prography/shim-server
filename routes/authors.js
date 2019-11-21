const { Router } = require('express');
const authors = require('../controllers/authors');
const { handleAsync } = require('../utils/routes');

const router = Router();

router.get('/', handleAsync(authors.getAuthors));
router.get('/:id', handleAsync(authors.getAuthor));

module.exports = router;
