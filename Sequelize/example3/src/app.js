const express = require('express');
const { courseRoute, studentRoute } = require('./routes/routes');

const app = express();

app.use(express.json());

app.use('/course', courseRoute);
app.use('/student', studentRoute);

module.exports = app;
