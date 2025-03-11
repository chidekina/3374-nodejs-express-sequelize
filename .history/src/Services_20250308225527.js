const dataSource = require("../models");

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRegisters() {
        return dataSource[this.model]
    }
}

module.exports = Services;