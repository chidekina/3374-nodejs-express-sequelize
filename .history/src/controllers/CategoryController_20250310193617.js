const Controller = require('./Controller.js');
const CategoryServices = require('../services/CategoryServices.js');

const c = new CategoryServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
