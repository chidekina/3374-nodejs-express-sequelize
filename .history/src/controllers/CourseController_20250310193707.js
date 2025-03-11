const Controller = require('./Controller.js');
const CourseController = require('../services/CourseController.js');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
