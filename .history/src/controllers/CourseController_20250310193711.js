const Controller = require('./Controller.js');
const CourseController = require('../services/CourseController.js');

const personServices = new CourseController();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
