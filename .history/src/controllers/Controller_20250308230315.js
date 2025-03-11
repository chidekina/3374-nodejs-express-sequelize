class Controller {
    constructor(serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const registerList = await this.serviceEntity.get
            return res.status(200).json(registerList);
        } catch (error) {

        }
    }
}

module.exports = Controller;