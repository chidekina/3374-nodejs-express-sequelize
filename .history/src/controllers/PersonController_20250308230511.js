const Controller = require('./Controller.js');
const PersonServices = require('../services/PersonServices.js');

const personServices = new PersonServices();

class PersonController extends Controller {
    constructor() {
        super()
    }
  static async getAll(req, res) {
    try {

    } catch (error) {

    }
  }
}

module.exports = PersonController;
