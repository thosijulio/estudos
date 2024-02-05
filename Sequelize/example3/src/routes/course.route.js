const express = require('express');
const { getCourses, createCourse, updateCourse, removeCourse, getCourseById } = require('../controller/course.controller');

const courseRoutes = express.Router();

courseRoutes.get('/', getCourses);
courseRoutes.post('/', createCourse);
courseRoutes.put('/:id', updateCourse);
courseRoutes.delete('/:id', removeCourse);
courseRoutes.get('/:id/?:withStudents', getCourseById)

module.exports = courseRoutes;
