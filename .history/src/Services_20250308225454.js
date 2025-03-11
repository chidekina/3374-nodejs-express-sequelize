const dataSource = require("../models");

class Services {
    constructor(modelName) {
        this.model = modelName;
    }
}

module.exports = Services;