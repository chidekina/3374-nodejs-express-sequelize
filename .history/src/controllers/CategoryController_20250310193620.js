const Controller = require('./Controller.js');
const CategoryServices = require('../services/CategoryServices.js');

const category = new CategoryServices();

class PersonController extends Controller {
  constructor() {
    super(category);
  }
}

module.exports = PersonController;
