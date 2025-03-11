const Services = require('./Services.js');

class PersonServices extends Services {
  constructor() {
    super('Person');
  }

  async getEnrollmentByStudent(id) {
    const student = await super.getByRegisteredId(id);
    
  }
}

module.exports = PersonServices;
