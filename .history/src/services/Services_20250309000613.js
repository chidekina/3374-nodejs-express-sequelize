const dataSource = require('../models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRegisters() {
        return dataSource[this.model].findAll();
    }

    async updateRegister(updatedData, id) {
        const updatedRegister = dataSource[this.model].
    }
}

module.exports = Services;