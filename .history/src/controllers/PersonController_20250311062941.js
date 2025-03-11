const Controller = require('./Controller.js');
const PersonServices = require('../services/PersonServices.js');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async get
}

module.exports = PersonController;
