const Controller = require('./Controller.js');
const CourseServices = require('../services/CourseServices.js');

const personServices = new CourseServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
