const express = require('express');
const { getStudents } = require('../../service/student.service');

const studentRoute = express.Router();

studentRoute.get('/', getStudents);

module.exports = studentRoute;
