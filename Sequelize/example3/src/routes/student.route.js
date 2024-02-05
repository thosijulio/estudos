const express = require('express');
const { getStudents } = require('../controller/student.controller');

const studentRoute = express.Router();

studentRoute.get('/', getStudents);

module.exports = studentRoute;
