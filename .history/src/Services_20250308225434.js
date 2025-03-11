const db = require("../models");

class Services {
    constructor(modelName) {
        this.model = modelName;
    }
}

module.exports = Services;