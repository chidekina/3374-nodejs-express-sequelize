const db = require("../models");

class PersonController {
  static async getAll(req, res) {
    try {
        const peopleList = await db.Person.findAll();
        
    } catch (error) {}
  }
}

module.exports = PersonController;
