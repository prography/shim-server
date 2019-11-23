const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const errors = require('./middlewares/errors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use(errors);

module.exports = app;
