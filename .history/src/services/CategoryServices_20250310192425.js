const Services = require('./Services.js');

class PersonServices extends Services {
    constructor() {
        super('Categories');
    }
}

module.exports = PersonServices;