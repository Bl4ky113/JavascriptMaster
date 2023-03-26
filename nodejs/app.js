'use-strict'

const express = require('express');
const bodyParser = require('body-parser');

const ProjectRoutes = require('./routes/projects');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/projects', ProjectRoutes);

module.exports = app;
