const Controller = require('./Controller.js');
const CategoryServices = require('../services/CategoryServices.js');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
