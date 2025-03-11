const { where } = require('sequelize');
const dataSource = require('../models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRegisters() {
        return dataSource[this.model].findAll();
    }

    async getRegisterById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async updateRegister(updatedData, id) {
        const listOfUpdatedRegisters = dataSource[this.model].update
        (updatedData, {
            where:{ id: id }
        });
        if (listOfUpdatedRegisters[0] === 0) {
            return false;
        }
        return true;
    }

    async deleteRegister(id) {
        return dataSource[this.model].destroy[]
    }
}

module.exports = Services;