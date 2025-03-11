class Controller {
    constructor(serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const registerList = await this.serviceEntity.getAllRegisters();
            return res.status(200).json(registerList);
        } catch (error) {

        }
    }

    async update(req, res) {
        const { id } = req.params;
        const {}
    }
}

module.exports = Controller;