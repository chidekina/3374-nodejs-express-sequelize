const Services = require('./Services.js');

class PersonServices extends Services {
  constructor() {
    super('Person');
  }

  async getEnrollmentByStudent(id) {
    
  }
}

module.exports = PersonServices;
