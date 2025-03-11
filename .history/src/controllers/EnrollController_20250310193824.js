const Controller = require('./Controller.js');
const EnrollServices = require('../services/EnrollServices.js');

const enrollSerrvices = new EnrollServices();

class PersonController extends Controller {
  constructor() {
    super(enrollSerrvices);
  }
}

module.exports = PersonController;
