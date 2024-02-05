const { Op } = require('sequelize');
const { Course, Student } = require('../database/models');

const addCourse = async (newCourse) => {
  Course.create(newCourse);
}

const getCourses = async () => {
  // Definindo o que será retornado (attributes), condições (where) e relacionamentos
  // Op: usando operadores para realizar consultar where no banco
  return Course.findAll(
    {
      include: {
        model: Student, as: 'students'
      },
      where: {
        [Op.and]: [
          { active: true }
        ]
      },
      attributes: [
        'name',
        ['description', 'newNameDescription'],
      ],
    })
};

const updateCourse = async (id, updatedCourse) => {
  const [amountUpdated] = Course.update(updatedCourse, { where: { id } });

  return amountUpdated > 0;
}

const removeCourse = async (id) => {
  const amountRemoved = Course.destroy({ where: { id } });

  return amountRemoved > 0;
}

const getCourseById = async (id, withStudents) => {
  const course = await Course.findByPk(id);

  if (withStudents === 'true') {
    const students = await course.getStudents();
    course.dataValues.students = students;
  }

  return course;
}

module.exports = {
  addCourse,
  getCourses,
  updateCourse,
  removeCourse,
  getCourseById,
}