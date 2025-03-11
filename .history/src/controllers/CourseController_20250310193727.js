const Controller = require('./Controller.js');
const CourseServices = require('../services/CourseServices.js');

const course = new CourseServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
