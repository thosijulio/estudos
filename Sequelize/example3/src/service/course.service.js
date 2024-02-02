const { Course } = require('../database/models');

const addCourse = async (newCourse) => {
  Course.create(newCourse);
}

const getCourses = async () => {
  return Course.findAll()
};

const updateCourse = async (id, updatedCourse) => {
  const [amountUpdated] = Course.update(updatedCourse, { where: { id } });

  return amountUpdated > 0;
}

const removeCourse = async (id) => {
  const amountRemoved = Course.destroy({ where: { id } });

  return amountRemoved > 0;
}

module.exports = {
  addCourse,
  getCourses,
  updateCourse,
  removeCourse,
}