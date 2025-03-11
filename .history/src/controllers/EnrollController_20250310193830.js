const Controller = require('./Controller.js');
const EnrollServices = require('../services/EnrollServices.js');

const enrollSerrvices = new EnrollServices();

class EnrollController extends Controller {
  constructor() {
    super(enrollSerrvices);
  }
}

module.exports = EnrollController;
