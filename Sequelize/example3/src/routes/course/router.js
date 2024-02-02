const express = require('express');
const courseController = require('../../controller/course.controller');

const courseRoutes = express.Router();

courseRoutes.get('/', courseController.getCourses);
courseRoutes.post('/', courseController.createCourse);
courseRoutes.put('/:id', courseController.updateCourse);
courseRoutes.delete('/:id', courseController.removeCourse);

module.exports = courseRoutes;
