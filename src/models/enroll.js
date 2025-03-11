'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enroll extends Model {
    static associate(models) {
      Enroll.belongsTo(models.Person, {
        foreignKey: 'student_id'
      });
      Enroll.belongsTo(models.Course, {
        foreignKey: 'course_id'
      });
    }
  }
  Enroll.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enroll',
    tableName: 'enrollments'
  });
  return Enroll;
};