const Controller = require('./Controller.js');
const PersonServices = require('../services/PersonServices.js');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async getEnrollments(req, res) {
    const{ studentId } = req.params;

    try{
      const enrollmentsList
    } catch(error) {

    }
  }
}

module.exports = PersonController;
