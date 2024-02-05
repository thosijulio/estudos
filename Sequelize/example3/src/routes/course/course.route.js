const express = require('express');
const { getCourses, createCourse, updateCourse, removeCourse } = require('../../controller/course.controller');

const courseRoutes = express.Router();

courseRoutes.get('/', getCourses);
courseRoutes.post('/', createCourse);
courseRoutes.put('/:id', updateCourse);
courseRoutes.delete('/:id', removeCourse);

module.exports = courseRoutes;
