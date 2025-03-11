const Controller = require('./Controller.js');
const EnrollServices = require('../services/EnrollServices.js');

const personServices = new Enro();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
