'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enroll extends Model {

    static associate(models) {
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