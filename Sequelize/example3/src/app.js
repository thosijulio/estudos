const express = require('express');
const courseRoutes = require('./routes/course/router');

const app = express();

app.use(express.json());

app.use('/course', courseRoutes);

module.exports = app;