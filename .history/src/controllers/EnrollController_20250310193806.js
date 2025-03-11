const Controller = require('./Controller.js');
const EnrollServices = require('../services/EnrollServices.js');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
