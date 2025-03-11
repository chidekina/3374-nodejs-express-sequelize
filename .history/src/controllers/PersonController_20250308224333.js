const db = require("../models");

class PersonController {
  static async getAll(req, res) {
    try {
        const peopleList = await db.Person.findAll();
        return res.status(200).json(peopleList);
    } catch (error) {}
  }
}

module.exports = PersonController;
